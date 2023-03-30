## PlutoX 
Python Api for PlutoX. PlutoX is the Drone from https://www.dronaaviation.com/ 

this is under construction.

### Installation Instruction
```
git clone https://github.com/nittvikas/PlutoX.git
cd PlutoX
pip install -e .
```
---
### Examples
---
###### Note : you must be connected with the PlutoX Wifi.

Arming the Drone and takeoff
create arm.py file and copy bellow code.
```python
from plutox import *
import time

if __name__ == '__main__':
    client = Drone()
    client.arm()
    time.sleep(2)
    client.takeOff()
    time.sleep(2)
    client.land()
    client.disArm()
```
```
python arm.py
```
###### Command Functions
| Function Name | Description |
| --- | --- |
| `def takeOff()` | Take of the drone |
| `def land()` | land the Drone, disconnect conection|
| `def frontFlip()` | flip from front side |
| `def backFlip()` | flip from back side |
| `def rightFlip()` | flip from right side |
| `def leftFlip()` | flip from right side |
| `def arm()` | Arm the drone |
| `def disArm()` | Disarm the drone |

##### Note: Work in progress.
