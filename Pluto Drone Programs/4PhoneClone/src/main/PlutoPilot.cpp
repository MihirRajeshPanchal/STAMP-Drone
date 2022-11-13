/*Do not remove the include below*/
#include "PlutoPilot.h"
#include "Control.h"
#include "User.h"
#include "Utils.h"
#include "Estimate.h"

int16_t Error=0, PlutoXHeading= 0;

/*The setup function is called once at Pluto's hardware startup*/
void plutoInit ()
{
/*Add your hardware initialization code here*/
}

/*The function is called once before plutoLoop when you activate Developer Mode*/
void onLoopStart ()
{
/*do your one time tasks here*/
	LED.flightStatus(DEACTIVATE); /*disable the default LED behavior*/
	Error = App.getAppHeading() - Angle.get(AG_YAW);
	Monitor.println("Error is: ", Error);
}

/*The loop function is called in an endless loop*/
void plutoLoop ()
{
	/*Add your repeated code here*/
	Monitor.println("PhoneHeading: ", App.getAppHeading());
	PlutoXHeading = App.getAppHeading() - Error;
	if (PlutoXHeading < 0)
	{
		PlutoXHeading+=360;
	}
	Monitor.println("PlutoX should turn to ", PlutoXHeading);
	DesiredAngle.set(AG_YAW, PlutoXHeading);
	Monitor.println("PlutoX is at: ", Angle.get(AG_YAW));
	LED.set(RED, ON);
	LED.set(GREEN, ON);
}

/*The function is called once after plutoLoop when you deactivate Developer Mode*/
void onLoopFinish ()
{
	/*do your cleanup tasks here*/
	LED.flightStatus(ACTIVATE); /*Enable the default LED behavior*/
}
