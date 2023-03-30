"""
this module contains Type wise commands which are of same type
"""
from plutox.msg.parser import *
from plutox.msg.typeConst import *


class MsgType():
    def __init__(self):
        """

        """
        self.parse = Parse()

    def command(self, cmd):
        """
        this method will create command and return it
        :param cmd:
        :return: command
        """
        return self.parse.convert([cmd], MSP_SET_COMMAND)

    def arming(self, arm: bool):
        """
        This will Arm the Drone.
        :param arm: if True : arm the vehicle, if false disarm it
        :return:
        """
        L = 1000  # LOW
        C = 1500  # center
        H = 2000  # High
        RC_ROLL, RC_PITCH, RC_YAW, RC_THROTTLE, RC_AUX1, RC_AUX2, RC_AUX3, RC_AUX4 = C, C, L, L, 1500, 1000, 1500, 1200
        data = [RC_ROLL, RC_PITCH, RC_YAW, RC_THROTTLE, RC_AUX1, RC_AUX2, RC_AUX3, RC_AUX4]
        if arm:
            data[-1] = 1500
            return self.parse.convert(data, MSP_SET_RAW_RC)
        else:
            data[-1] = 901
            return self.parse.convert(data, MSP_SET_RAW_RC)
