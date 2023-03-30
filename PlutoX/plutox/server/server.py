"""
this module will help to connect the Drone server
basically PlutoX Uses Telnet Protocol to Connect
"""
import telnetlib


class Connection():
    def __init__(self, DroneIP="192.168.4.1", DronePort="23"):
        self.DRONEIP = DroneIP
        self.DRONEPORT = DronePort

    def connect(self):
        """
        this will connect to the Drone and Return the Telnet connection
        Object
        :return: telnet Connection Object
        """
        try:
            self.tn = telnetlib.Telnet(self.DRONEIP, self.DRONEPORT)
            return self.tn
        except:
            print("Error While Connecting the Drone System.")

    def disconnect(self):
        self.tn.close()
        print("Server connection closed")