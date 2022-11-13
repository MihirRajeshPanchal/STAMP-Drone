/*Do not remove the include below*/
#include "PlutoPilot.h"
#include "Estimate.h" /*gives access to drone rates, angles, velocities and positions*/
#include "Utils.h" /*gives access to LED, Graphs and Print*/ /*The setup function is called once at Pluto's hardware startup*/

void plutoInit ()
{
	/*Add your hardware initialization code here*/
}

/*The function is called once before plutoPilot when you activate Developer
Mode*/

void onLoopStart ()
{
	/*do your one time tasks here*/
	LED.flightStatus(DEACTIVATE); /*Disable default Led behaviour*/
}

/*The loop function is called in an endless loop*/

void plutoLoop ()
{
	/*Add your repeated code here*/

	if (Velocity.get(Z) > 0 ) /*If the drone is moving upwards(Velocity in the Z axis will be positive)*/
	{
		LED. set (RED, ON);
		LED. set (GREEN, OFF);
	}
	else /*If the drone is moving downwards*/
	{
		LED. set (RED, OFF);
		LED. set (GREEN, ON);
	}
	Monitor.println( "Velocity Z: " , Velocity.get(Z));
	Graph.red(Velocity.get(Z), 1 );
}
	/*The function is called once after plutoPilot when you deactivate Developer
	Mode*/

void onLoopFinish ()
{
	/*do your cleanup tasks here*/
	LED.flightStatus(ACTIVATE); /*Enable the default LED behaviour*/
}
