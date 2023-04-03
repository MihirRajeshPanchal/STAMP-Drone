from plutox import *
import time

if __name__ == '__main__':
    client = Drone()
    client.arm() # working 
    time.sleep(2)
    client.takeOff() # not working as of now
    ''' working
    time.sleep(2)
    client.right()
    time.sleep(2)
    client.left()
    time.sleep(2)
    client.forward()
    time.sleep(2)
    client.backward()
    time.sleep(2)
    '''
    client.land() # not working as of now
    client.disArm() # working 