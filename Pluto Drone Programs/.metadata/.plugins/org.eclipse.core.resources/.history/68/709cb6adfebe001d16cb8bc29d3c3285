// Do not remove the include below
#include "PlutoPilot.h"
#include "XRanging.h"
#include "Utils.h"
int16_t Range= 0 ;
/*The setup function is called once at Pluto's hardware startup*/
void plutoInit ()
{
/*Add your hardware initialization code here*/

	XRanging.init(LEFT); /*Initialize Left Ranging sensor*/
}
	/*The function is called once before plutoLoop when you activate Developer
	Mode*/
void onLoopStart ()
{
	/*do your one time tasks here*/
	LED.flightStatus(DEACTIVATE); /*Disable the default led behavior*/
}
	/* The loop function is called in an endless loop*/
void plutoLoop ()
{
	/*Add your repeated code here*/
	Range=XRanging.getRange(LEFT); /*Get Data from Left Ranging sensor*/
	Monitor.println( "LRange" , Range);
	LED. set (BLUE,ON);
	LED. set (RED, ON);
}
	/*The function is called once after plutoLoop when you deactivate Developer
	Mode*/
void onLoopFinish ()
{
	/*do your cleanup tasks here*/
	LED.flightStatus(ACTIVATE); /*Enable the default led behavior*/
}
