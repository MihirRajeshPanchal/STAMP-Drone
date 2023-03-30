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

