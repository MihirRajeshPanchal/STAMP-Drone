"""
this is the main API which will provide Methods to Communicate the Drone System
"""
from plutox.server.server import Connection
from plutox.msg.types import *


class Drone():
    def __init__(self, DroneIP="192.168.4.1", DronePort="23"):
        """
        initialize the variables
        """
        self.DRONEIP = DroneIP
        self.DRONEPORT = DronePort
        self.conn = Connection(self.DRONEIP, self.DRONEPORT).connect()
        self.msgType = MsgType()

    def takeOff(self):
        """
        this method will take off the drone
        :return: None
        """
        self.sendData(self.msgType.command(1), "takeOff")

    def land(self):
        """
        this method will lang the Drone
        :return: None
        """
        self.sendData(self.msgType.command(2), "Land")

    def backFlip(self):
        """
        for back flip
        :return:
        """
        self.sendData(self.msgType.command(3), "BackFlip")

    def frontFlip(self):
        """
        for back flip
        :return:
        """
        self.sendData(self.msgType.command(4), "frontFlip")

    def rightFlip(self):
        """
        for back flip
        :return:
        """
        self.sendData(self.msgType.command(5), "rightFlip")

    def leftFlip(self):
        """
        for back flip
        :return:
        """
        self.sendData(self.msgType.command(6), "LeftFlip")

    def arm(self):
        """
        this will arm the Drone it need to be called before flying
        :return: None
        """
        self.sendData(self.msgType.arming(True), "ARM")

    def disArm(self):
        """
        this will arm the Drone it need to be called before flying
        :return: None
        """
        self.sendData(self.msgType.arming(False), "Disarm")
        
    def forward(self):
        self.sendData(self.msgType.forward(is_stop=False),"Forward")
        
    def forwardstop(self):
        self.sendData(self.msgType.forward(is_stop=True),"Forward Stop")
        
    def backward(self):
        self.sendData(self.msgType.backward(is_stop=False),"Backward")
        
    def backwardstop(self):
        self.sendData(self.msgType.backward(is_stop=True),"Backward Stop")
        
    def left(self):
        self.sendData(self.msgType.left(is_stop=False),"Left")
        
    def leftstop(self):
        self.sendData(self.msgType.left(is_stop=True),"Left Stop")
        
    def right(self):
        self.sendData(self.msgType.right(is_stop=False),"Right")
        
    def rightstop(self):
        self.sendData(self.msgType.right(is_stop=True),"Right Stop")
           
    def m1(self):
        self.sendData(self.msgType.m1(is_stop=False),"Motor 1")
           
    def m1stop(self):
        self.sendData(self.msgType.m1(is_stop=True),"Motor 1 Stop")
        
    def m2(self):
        self.sendData(self.msgType.m2(is_stop=False),"Motor 2")
        
    def m2stop(self):
        self.sendData(self.msgType.m2(is_stop=True),"Motor 2 Stop")
        
    def m3(self):
        self.sendData(self.msgType.m3(is_stop=False),"Motor 3")
        
    def m3stop(self):
        self.sendData(self.msgType.m3(is_stop=True),"Motor 3 Stop")
        
    def m4(self):
        self.sendData(self.msgType.m4(is_stop=False),"Motor 4")
        
    def m4stop(self):
        self.sendData(self.msgType.m4(is_stop=True),"Motor 4 Stop")
        
        
    def sendData(self, data, err):

        """
        this method will send the data to the Drone
        :param data: which need to be send to the drone
        :return: None
        """
        try:
            self.conn.write(data)
        except:
            print("Error While sending {} Data".format(err))

