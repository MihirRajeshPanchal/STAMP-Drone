/*Do not remove the include below*/
#include "PlutoPilot.h"
#include "User.h"
#include "Utils.h"

/*The setup function is called once at Pluto's hardware startup*/
void plutoInit ()
{
	/*Add your hardware initialization code here*/
}

/*The function is called once before plutoLoop when you activate Developer Mode*/
void onLoopStart ()
{
	/*do your one time tasks here*/
	LED.flightStatus(DEACTIVATE); /*Disable default Led behavior*/
}

/*The loop function is called in an endless loop*/
void plutoLoop ()
{
/*Add your repeated code here*/
	FlightMode. set (RATE); /*Change flight mode to Rate mode*/
	LED. set (RED, ON);
	LED. set (BLUE, ON);
	LED. set (GREEN, OFF);
}

/*The function is called once after plutoLoop when you deactivate Developer Mode*/
void onLoopFinish ()
{
	/*do your cleanup tasks here*/
	LED.flightStatus(ACTIVATE); /*Enable default Led behavior*/
}
