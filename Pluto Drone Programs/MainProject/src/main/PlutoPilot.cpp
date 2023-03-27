// Do not remove the include below
#include "PlutoPilot.h"
#include "Xranging.h"
#include "Sensor.h"
#include "User.h"
#include "Utils.h"

//The setup function is called once at PlutoX's hardware startup
void plutoInit ()
{
	/*Add your hardware initialization code here*/
	XRanging.init(LEFT); /*Initialize Left Ranging sensor*/
	XRanging.init(RIGHT); /*Initialize Right Ranging sensor*/
	setUserLoopFrequency( 4 ); /*Change loop frequency for faster loop
	execution*/
}

void onLoopStart ()
{
	/*do your one time tasks here*/
	LED.flightStatus(DEACTIVATE); /*Disable default Led behavior*/
}

//The function is called once before plutoLoop() when you activate developer mode
void plutoLoop ()
{
	/*Add your repeated code here*/
	/*if the sensor detects an obstacle on the left side i.e. range less than 500,
	roll right*/
	if (Acceleration.getNetAcc()< 2 &&(!FlightStatus.check(FS_CRASHED)))
	/*Condition for free fall*/
	{
		Command.arm(); /*Arm the drone*/
		LED. set (RED, ON);

		LED. set (GREEN, ON);
	}
	if (XRanging.getRange(LEFT)< 500 && XRanging.getRange(LEFT)> 0 )
	{
		RcCommand. set (RC_ROLL, 1600);
		LED. set (RED,ON);
		LED. set (BLUE,OFF);
	}
	/*if the sensor detects an obstacle on the right side i.e. range less than
	500, roll left*/
	else if (XRanging.getRange(RIGHT)< 500 && XRanging.getRange(RIGHT)> 0 )
	{
		RcCommand. set (RC_ROLL, 1400);
		LED. set (RED,OFF);
		LED. set (BLUE,ON);
	}
		/*when no obstacle is detected, let control be with the user*/
	else
	{
		RcCommand. set (RC_ROLL,RcData.get(RC_ROLL));
		LED. set (RED,OFF);
		LED. set (BLUE,OFF);
	}
}

//The function is called once after plutoLoop() when you deactivate developer mode
void onLoopFinish()
{
//Do your cleanup stuff here
	LED.flightStatus(ACTIVATE); /*Enable the default led behavior*/
}




