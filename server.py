from flask import Flask,jsonify,request,Response,make_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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


@app.route('/dic_apis[i]', methods=['POST'])
def dicapis():
    pass


if __name__ == '__main__':
	app.run(debug=True)