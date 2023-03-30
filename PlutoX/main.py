"Entry "
from plutox import *
import time

if __name__ == '__main__':
    client = Drone()
    client.arm()
    # time.sleep(2)
    client.takeOff()
    time.sleep(2)
    client.land()
    # client.disArm()
