"""
This module is used to compose messages which we are going to send to the Drone
"""
import struct


class Parse:
    def __init__(self):
        self.HEADER = [b'$', b'M']
        self.DIRECTION = {"IN": b'<', "OUT": b'>'}  # IN: to Drone OUT: From Drone
        self.MSP_MSG_PARSE = '<3c2B%iHB'

    def convert(self, data, typeOfMsg):
        """
        This will convert message into packet to Send to The Drone
        :param msg: Data which we are sending to Drone
        :param typeOfMsg: It's type of message
        :return:
        """
        lenOfData = len(data)
        msg = self.HEADER + [self.DIRECTION["IN"]] + [lenOfData * 2] + [typeOfMsg] + data
        msg = struct.pack(self.MSP_MSG_PARSE[:-1] % lenOfData, *msg)

        # Checksum calc is XOR between <size>, <command> and (each byte) <data>
        checksum = 0
        for i in msg[3:]:
            checksum ^= i
        # Add checksum at the end of the msg
        msg += bytes([checksum])
        return msg
