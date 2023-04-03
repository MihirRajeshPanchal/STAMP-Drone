from flask import Flask,jsonify,request,Response,make_response
from flask_cors import CORS
from flask_mail import Mail, Message

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

if __name__ == '__main__':
	app.run(debug=True)