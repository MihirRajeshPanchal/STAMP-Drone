# import necessary packages
import cv2
import numpy as np
import time
from plutox import *
import mediapipe as mp
import tensorflow as tf
from tensorflow.keras.models import load_model
from gtts import gTTS 
import pyttsx3  

def tts(text):
    # initialize Text-to-speech engine  
    engine = pyttsx3.init()  
    voices = engine.getProperty('voices')
    engine.setProperty("rate", 178)
    engine.setProperty('voice', voices[1].id) #changing index changes voices but ony 0 and 1 are working here
    # convert this text to speech  
    engine.say(text)  
    # play the speech  
    engine.runAndWait()  

def handDetect():

    mpHands = mp.solutions.hands
    hands = mpHands.Hands(max_num_hands=1, min_detection_confidence=0.7)
    mpDraw = mp.solutions.drawing_utils

    model = load_model('Hand_Gesture_Recognition\mp_hand_gesture')

    f = open('Hand_Gesture_Recognition\gesture.names', 'r')
    classNames = f.read().split('\n')
    f.close()

    cap = cv2.VideoCapture(0)
    while True:
        _, frame = cap.read()

        x, y, c = frame.shape

        frame = cv2.flip(frame, 1)
        framergb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        result = hands.process(framergb)
        
        className = ''

        if result.multi_hand_landmarks:
            landmarks = []
            for handslms in result.multi_hand_landmarks:
                for lm in handslms.landmark:
                    lmx = int(lm.x * x)
                    lmy = int(lm.y * y)

                    landmarks.append([lmx, lmy])

                mpDraw.draw_landmarks(frame, handslms, mpHands.HAND_CONNECTIONS)
                prediction = model.predict([landmarks])
                classID = np.argmax(prediction)
                className = classNames[classID]

  
        cv2.putText(frame, className, (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0,0,255), 2, cv2.LINE_AA)

        cv2.imshow("Output is :", frame) 

        k = cv2.waitKey(100) & 0xff # Press 'ESC' for exiting video
        if k == 27:
            break
        checkGesture(className)

    cap.release()

    cv2.destroyAllWindows()

def checkGesture(hd): 

    if hd=='rock':
        #spinall
        tts("Rock Gesture Detected")
        tts("PlutoX Takeoff Instantiated")
        spinall()
    elif hd=='thumbs up':
        #forward
        tts("Thumbs Up Gesture Detected")
        tts("PlutoX Forward Motion Instantiated")
        forward()
    elif hd=='thumbs down':
        #backward
        tts("Thumbs Down Gesture Detected")
        tts("PlutoX Backward Motion Instantiated")
        backward()
    elif hd=='fist':
        #left
        tts("Fist Gesture Detected")
        tts("PlutoX Left Motion Instantiated")
        left()
    elif hd=='call me':
        #right
        tts("Call Me Gesture Detected")
        tts("PlutoX Right Motion Instantiated")
        right()
    elif hd=='peace':
        #m1
        tts("Peace Gesture Detected")
        tts("PlutoX M1 Propeller Instantiated")
        m1()
    elif hd=='okay':
        #m2
        tts("Okay Gesture Detected")
        tts("PlutoX M2 Propeller Instantiated")
        m2()
    elif hd=='stop':
        #m3
        tts("Stop Gesture Detected")
        tts("PlutoX M3 Propeller Instantiated")
        m3()
    elif hd=='smile':
        #m4
        tts("Smile Gesture Detected")
        tts("PlutoX M4 Propeller Instantiated")
        m4()
    return

def m1():
    client = Drone()
    client.m1()
    time.sleep(5)
    client.m1stop()

def m2():
    client = Drone()
    client.m2()
    time.sleep(5)
    client.m2stop()

def m3():
    client = Drone()
    client.m3()
    time.sleep(5)
    client.m3stop()

def m4():
    client = Drone()
    client.m4()
    time.sleep(5)
    client.m4stop()

def left():
    client = Drone()
    client.left()
    time.sleep(5)
    client.leftstop()

def right():
    client = Drone()
    client.right()
    time.sleep(5)
    client.rightstop()

def forward():
    client = Drone()
    client.forward()
    time.sleep(5)
    client.forwardstop()

def backward():
    client = Drone()
    client.backward()
    time.sleep(5)
    client.backwardstop()
    
def spinall():
    client = Drone()
    client.arm()
    time.sleep(5)
    client.disArm()