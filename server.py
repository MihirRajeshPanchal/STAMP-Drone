from flask import Flask,jsonify,request,Response,make_response, send_file
from flask_cors import CORS
from flask_mail import Mail, Message
from Face_Recognition.one_face_dataset import face_train, add_to_json
from Face_Recognition.two_face_training import yml_train
from Face_Recognition.three_face_recognition import face_detect
from Face_Recognition.savevideo import save_video
from plutox import *
from Cloud_Backend.sns_subscribe import sns_subscribe
from Cloud_Backend.s3 import upload_s3
from Cloud_Backend.dynamodb_contact_us import add_to_dynamodb_contact_us
from Hand_Gesture_Recognition.HandDetection import handDetect
import cv2, os, json, time
import numpy as np
import shutil

app = Flask(__name__)
CORS(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = ''
app.config['MAIL_PASSWORD'] = ''
app.config['MAIL_DEFAULT_SENDER'] = ('STAMP', '')

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


@app.route('/surveillance', methods=['POST', 'GET'])
def surveillance():
    return jsonify({'message': 'Hello, World!'})

@app.route('/subscribe-email', methods=['POST'])
def send_email():
    data = request.json
    recipient = data['recipient']
    sns_subscribe(recipient)
    return {'message': 'Email Subscribed'}

@app.route('/write-file-email', methods=['POST'])
def write_file():
    data = request.json['data']
    with open('STAMP/stamp/src/files/emails.txt', 'a') as f:
        f.write(data + '\n')
    upload_s3("STAMP/stamp/src/files/emails.txt")
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
    cap = cv2.VideoCapture("input/" + yolo_file)
    frame_count = 0
    output_folder = "yolo_processing"
    os.makedirs(output_folder, exist_ok=True)
    while True:
        success, frame = cap.read()
        if not success:
            break
        frame = process_frame(frame, model, output_layers, classes, colors)
        ret, buffer = cv2.imencode('.jpg', frame)
        
        frame_path = os.path.join(output_folder, f"output_file{frame_count:04d}.jpg")
        cv2.imwrite(frame_path, frame)
        
        frame = buffer.tobytes()
        frame_count+=1
    generateyolo()
    print("Video Generated")
    
    source = yolo_file
    dest = "STAMP/stamp/src/components/Surveillance/"

    print("before copy")
    if not os.path.exists(source):
        print("path doesnt exist")
        return f"Source file '{source}' does not exist", 404
    
    try:
        shutil.copy2(source, os.path.join(dest, "yolo.mp4"))
        print("copied")
    except Exception as e:
        return f"Error copying file: {e}", 500

        # yield (b'--frame\r\n'
        #         b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

yolo_file = ""

@app.route('/yoloupload', methods=['POST'])
def yoloupload():
    global yolo_file
    output_filename = request.form['outputFilename'] + ".mp4"
    if 'file' not in request.files:
        return jsonify({'error': 'No file in request'}), 400
    yolo_file = request.files['file']
    if yolo_file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    if yolo_file:
        if not os.path.exists('input'):
            os.makedirs('input')
        yolo_file.save('input/' + output_filename)
        yolo_file = output_filename
        return jsonify({'message': f'{yolo_file} uploaded successfully'}), 200
    else:
        return jsonify({'error': 'Failed to upload file'}), 500

@app.route('/yolo', methods=['POST', 'GET'])
def index():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/generateyolo', methods=['POST', 'GET'])
def generateyolo(): # take videofile from user via user
    global yolo_file
    import cv2
    import os
    import shutil
    # Path to the directory containing the JPEG images
    image_dir = "yolo_processing/"

    # Output video file name
    # video_file = filename
    video_file = yolo_file
    
    # Get a list of all the JPEG images in the directory
    image_files = [os.path.join(image_dir, f) for f in os.listdir(image_dir) if f.endswith(".jpg")]

    # Sort the image files in ascending order
    image_files.sort()

    # Read the first image to get the image size
    frame = cv2.imread(image_files[0])
    height, width, channels = frame.shape

    # Define the codec and create a VideoWriter object
    fourcc = cv2.VideoWriter.fourcc('m','p','4','2') # MPEG-4 codec
    out = cv2.VideoWriter(video_file, fourcc, 30.0, (width, height))

    # Loop through all the image files and add them to the video
    for image_file in image_files:
        frame = cv2.imread(image_file)
        out.write(frame)

    # Release the VideoWriter and close all windows
    out.release()
    cv2.destroyAllWindows()
    shutil.rmtree("yolo_processing")

file = ""

@app.route('/upload', methods=['POST'])
def upload():
    global file
    output_filename = request.form['outputFilename'] + ".mp4"
    if 'file' not in request.files:
        return jsonify({'error': 'No file in request'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    if file:
        if not os.path.exists('input'):
            os.makedirs('input')
        file.save('input/' + output_filename)
        file = output_filename
        return jsonify({'message': f'{file} uploaded successfully'}), 200
    else:
        return jsonify({'error': 'Failed to upload file'}), 500

firstName = ""
lastName = ""
email = ""

@app.route('/newrecord', methods=['POST'])
def train_face():
    global firstName, lastName, email
    data = request.get_data()
    # print(data)
    parsed_data = json.loads(data)
    firstName = parsed_data['firstName']
    lastName = parsed_data['lastName']
    email = parsed_data['email']
    # print(firstName, lastName, email)
    return jsonify({'message': "details recieved successfully"}), 200

@app.route('/train', methods=['POST'])
def train():
    face_train(firstName, lastName, email)
    yml_train()
    return jsonify({'message': "trained successfully"}), 200

@app.route('/single_face_train', methods=['POST'])
def single_face_train():
    data = request.get_data()
    parsed_data = json.loads(data)
    fullname = parsed_data['fullName'].split()
    fName = fullname[0]
    lName = fullname[1]
    email = parsed_data['email']
    print(fName, lName, email)
    face_train(fName, lName, email)
    yml_train()
    return jsonify({'message': "Single Face trained successfully"}), 200

@app.route('/detect', methods=['POST'])
def detect():
    global file
    face_detect(file)
    save_video(file)
    source = file
    dest = "STAMP/stamp/src/components/Security/"

    print("before copy")
    if not os.path.exists(source):
        print("path doesnt exist")
        return f"Source file '{source}' does not exist", 404
    
    try:
        shutil.copy2(source, os.path.join(dest, "face.mp4"))
        print("copied")
    except Exception as e:
        return f"Error copying file: {e}", 500

    return jsonify({'message': "detected successfully"}), 200

@app.route('/save_to_disc', methods=['GET'])
def save_to_disc():
    file_path = 'face.mp4'
    return send_file(file_path, as_attachment=True)

@app.route('/save_to_cloud', methods=['GET', 'POST'])
def save_to_cloud():
    data = request.get_json()
    file_path = data['outputFilename'] + ".mp4"
    upload_s3(file_path)
    return jsonify({'message': "Saved to Cloud"}), 200

@app.route('/send_face_report', methods=['GET', 'POST'])
def send_face_report():
    data = request.json
    subject = "Face Detection report"
    recipient = data['reportMail']
    outputFilename = data['outputFilename'] + ".mp4"
    body = "Please find the attached report for your Face Detection"

    message = Message(subject=subject, recipients=[recipient], body=body)
    print(outputFilename)
    with app.open_resource(outputFilename) as fp:  
        message.attach(outputFilename, "video/mp4",fp.read())  
        mail.send(message)  
    save_to_cloud()
    return jsonify({'message': "Report sent to mail successfully"}), 200

@app.route('/send_yolo_face_report', methods=['GET', 'POST'])
def send_yolo_face_report():
    data = request.json
    subject = "Yolo Detection report"
    recipient = data['reportMail']
    outputFilename = data['outputFilename'] + ".mp4"
    body = "Please find the attached report for your Yolo Detection"

    message = Message(subject=subject, recipients=[recipient], body=body)
    print(outputFilename)
    with app.open_resource(outputFilename) as fp:  
        message.attach(outputFilename, "video/mp4",fp.read())  
        mail.send(message)  
    save_yolo_to_cloud()
    return jsonify({'message': "Report sent to mail successfully"}), 200

@app.route('/save_yolo_to_disc', methods=['GET'])
def save_yolo_to_disc():
    file_path = 'yolo.mp4'
    return send_file(file_path, as_attachment=True)

@app.route('/save_yolo_to_cloud', methods=['GET', 'POST'])
def save_yolo_to_cloud():
    data = request.get_json()
    file_path = data['outputFilename'] + ".mp4"
    upload_s3(file_path)
    return jsonify({'message': "Saved to Cloud"}), 200

@app.route('/hand_gesture', methods=['GET'])
def hand_gesture():
    handDetect()
    return jsonify({'message': "Hand Gesture"}), 200

@app.route('/contact_us', methods=['POST'])
def contact_us():
    data = request.get_data()
    parsed_data = json.loads(data)
    name = parsed_data['name']
    email = parsed_data['email']
    message = parsed_data['message']
    add_to_dynamodb_contact_us(name,email,message)
    return jsonify({'message': "details recieved successfully"}), 200

@app.route('/test', methods=['GET'])
def test():
    # for testing only
    yml_train()
    return jsonify({'message': "Success"}), 200

@app.route('/spinall', methods=['POST'])
def spinall():
    client = Drone()
    client.arm()
    time.sleep(5)
    client.disArm()
    return jsonify({'message': "Success"}), 200

@app.route('/m1', methods=['POST'])
def m1():
    client = Drone()
    client.m1()
    time.sleep(5)
    client.m1stop()
    return jsonify({'message': "Success"}), 200

@app.route('/m2', methods=['POST'])
def m2():
    client = Drone()
    client.m2()
    time.sleep(5)
    client.m2stop()
    return jsonify({'message': "Success"}), 200

@app.route('/m3', methods=['POST'])
def m3():
    client = Drone()
    client.m3()
    time.sleep(5)
    client.m3stop()
    return jsonify({'message': "Success"}), 200

@app.route('/m4', methods=['POST'])
def m4():
    client = Drone()
    client.m4()
    time.sleep(5)
    client.m4stop()
    return jsonify({'message': "Success"}), 200

@app.route('/left', methods=['POST'])
def left():
    client = Drone()
    client.left()
    time.sleep(5)
    client.leftstop()
    return jsonify({'message': "Success"}), 200

@app.route('/right', methods=['POST'])
def right():
    client = Drone()
    client.right()
    time.sleep(5)
    client.rightstop()
    return jsonify({'message': "Success"}), 200

@app.route('/forward', methods=['POST'])
def forward():
    client = Drone()
    client.forward()
    time.sleep(5)
    client.forwardstop()
    return jsonify({'message': "Success"}), 200

@app.route('/backward', methods=['POST'])
def backward():
    client = Drone()
    client.backward()
    time.sleep(5)
    client.backwardstop()
    return jsonify({'message': "Success"}), 200

if __name__ == '__main__':
	app.run(debug=True)