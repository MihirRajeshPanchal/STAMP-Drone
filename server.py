from flask import Flask,jsonify,request,Response,make_response
from flask_cors import CORS
from flask_mail import Mail, Message
from Face_Recognition.one_face_dataset import face_train, add_to_json
from Face_Recognition.two_face_training import yml_train
from Face_Recognition.three_face_recognition import face_detect
from Face_Recognition.savevideo import save_video
import cv2, os, json
import numpy as np

app = Flask(__name__)
CORS(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'mihirtestprogrammer@gmail.com'
app.config['MAIL_PASSWORD'] = 'yflrrgfqxxfpyvve'
app.config['MAIL_DEFAULT_SENDER'] = ('STAMP', 'mihirtestprogrammer@gmail.com')

mail = Mail(app)

dic_apis={
    "/surveillance":"takes video input and runs - Object Detection\yoloVideo.py",
    "/dataset":"display opencv stream in a react component and run - Face Recognition\01_face_dataset.py",
    "/train":"run - Face Recognition\02_face_training.py",
    "/detect":"run - Face Recognition\03_face_recognition.py",
    "/arm":{
      '''
        from plutox import *
        import time
        client = Drone()
        client.arm()
        time.sleep(n)                   <---- take n in api
        client.disArm()
      '''  
    },
    "/upload":"upload the video to aws bucket",
    "/cameraviewing":"abhi ke liye laptop camera but will give you live camera feed python code if possible",
    "/sendmail":"get email from footer and send mail to saridqureshi299@gmail.com",
    "/blockchainconnect":"create a python function which adds blockchaindetails to firebase",
}


dic_apis_react_call={
    "/surveillance":"http://localhost:3000/surveillance",
    "/dataset":"http://localhost:3000/security/newrecord/dataset",
    "/train":"http://localhost:3000/security/newrecord/train",
    "/detect":"http://localhost:3000/security/detect",
    "/arm":"http://localhost:3000/settings/arm",
    "/upload":"in multiple components wherever video is rendered eg /security , /surveillance , /cameraviewing",
    "/cameraviewing":"abhi ke liye laptop camera but will give you live camera feed python code if possible",
    "/sendmail":"footer me se ",
    "/blockchainconnect":"navbar me :- STAMP\stamp\src\blockchain\Wallet.js  http://localhost:3000/blockchainconnect",
}


# @app.route('/dic_apis[i]', methods=['POST'])
# def dicapis():
#     pass

@app.route('/surveillance', methods=['POST', 'GET'])
def surveillance():
    return jsonify({'message': 'Hello, World!'})

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    subject = data['subject']
    recipient = data['recipient']
    body = data['body']
    
    message = Message(subject=subject, recipients=[recipient], body=body)
    mail.send(message)
    
    return {'message': 'Email sent'}

@app.route('/write-file-email', methods=['POST'])
def write_file():
    data = request.json['data']
    with open('STAMP/stamp/src/files/emails.txt', 'a') as f:
        f.write(data + '\n')
    return {'success': True}

def get_box_dimensions(outputs, height, width):
    boxes = []
    confs = []
    class_ids = []
    prev_frame_time=0
    new_prev_frame_time=0


    for output in outputs:
        for detect in output:
            scores = detect[5:]
            class_id = np.argmax(scores)
            conf = scores[class_id]
            if conf > 0.4:   #Try .6
                center_x = int(detect[0] * width)
                center_y = int(detect[1] * height)
                w = int(detect[2] * width)
                h = int(detect[3] * height)
                x = int(center_x - w/2)
                y = int(center_y - h / 2)
                boxes.append([x, y, w, h])
                confs.append(float(conf))
                class_ids.append(class_id)

    return boxes, confs, class_ids


def load_yolo():
    net = cv2.dnn.readNetFromDarknet("Object_Detection/python/yolov3_testing.cfg", "Object_Detection/python/yolov3.weights")
    with open("Object_Detection/python/coco.names", "r") as f:
        classes = [line.strip() for line in f.readlines()]
    output_layers = [layer_name for layer_name in net.getUnconnectedOutLayersNames()]
    colors = np.random.uniform(0, 255, size=(len(classes), 3))
    return net, classes, colors, output_layers

def detect_objects(img, net, outputLayers):
    blob = cv2.dnn.blobFromImage(img, scalefactor=0.00392, size=(320, 320), mean=(0, 0, 0), swapRB=True, crop=False)
    net.setInput(blob)
    outputs = net.forward(outputLayers)
    return blob, outputs

def draw_labels(boxes, confs, colors, class_ids, classes, img):
    for i in range(len(boxes)):
        x, y, w, h = boxes[i]
        label = str(classes[class_ids[i]])
        color = colors[class_ids[i]]
        cv2.rectangle(img, (x,y), (x+w, y+h), color, 2)
        cv2.putText(img, label + str(round(confs[i]*100,2)), (x, y - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)

def process_frame(frame, net, output_layers, classes, colors):
    height, width, channels = frame.shape
    blob, outputs = detect_objects(frame, net, output_layers)
    boxes, confs, class_ids = get_box_dimensions(outputs, height, width)
    draw_labels(boxes, confs, colors, class_ids, classes, frame)
    return frame

def generate_frames():
    global yolo_file
    # yolo_file = yolo_file.filename
    model, classes, colors, output_layers = load_yolo()
    print("input/" + yolo_file.filename)
    cap = cv2.VideoCapture("input/" + yolo_file.filename)
    while True:
        success, frame = cap.read()
        if not success:
            break
        frame = process_frame(frame, model, output_layers, classes, colors)
        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

yolo_file = ""

@app.route('/yoloupload', methods=['POST'])
def yoloupload():
    global yolo_file
    if 'file' not in request.files:
        return jsonify({'error': 'No file in request'}), 400
    yolo_file = request.files['file']
    if yolo_file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    if yolo_file:
        if not os.path.exists('input'):
            os.makedirs('input')
        yolo_file.save('input/' + yolo_file.filename)
        return jsonify({'message': f'{yolo_file.filename} uploaded successfully'}), 200
    else:
        return jsonify({'error': 'Failed to upload file'}), 500

@app.route('/yolo', methods=['POST', 'GET'])
def index():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

file = ""

@app.route('/upload', methods=['POST'])
def upload():
    global file
    if 'file' not in request.files:
        return jsonify({'error': 'No file in request'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    if file:
        if not os.path.exists('input'):
            os.makedirs('input')
        file.save('input/' + file.filename)
        return jsonify({'message': f'{file.filename} uploaded successfully'}), 200
    else:
        return jsonify({'error': 'Failed to upload file'}), 500

firstName = ""
lastName = ""
email = ""

@app.route('/newrecord', methods=['POST'])
def train_face():
    global firstName, lastName, email
    data = request.get_data()
    print(data)
    parsed_data = json.loads(data)
    firstName = parsed_data['firstName']
    lastName = parsed_data['lastName']
    email = parsed_data['email']
    print(firstName, lastName, email)
    return jsonify({'message': "details recieved successfully"}), 200

@app.route('/train', methods=['POST'])
def train():
    face_train(firstName, lastName, email)
    yml_train()
    return jsonify({'message': "trained successfully"}), 200

@app.route('/detect', methods=['POST'])
def detect():
    face_detect(file)
    save_video("1.mp4")
    return jsonify({'message': "detected successfully"}), 200

@app.route('/test', methods=['GET'])
def test():
    # for testing only
    yml_train()
    return jsonify({'message': "Success"}), 200

if __name__ == '__main__':
	app.run(debug=True)