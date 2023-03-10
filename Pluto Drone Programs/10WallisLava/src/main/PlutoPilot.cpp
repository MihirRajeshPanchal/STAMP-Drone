#include "PlutoPilot.h"
#include "Control.h"
#include "XRanging.h"
#include "Utils.h"
#include "User.h"
#define dt 0.1
float XLeft= 0 ; /*left ranging value*/
float XRight= 0 ; /*right ranging value*/
float left; /*filtered left ranging value*/
float right; /*filtered right ranging value*/
float LeftOld= 0 ; /*previous filtered value of left ranging*/
float RightOld= 0 ; /*previous filtered value of right ranging*/
float Error; /*unfiltered error*/
float FilError; /*filtered error*/
float PreError= 0 ; /*previous filtered error*/
float Derivative; /*difference between current and previous error*/
int16_t RollValue= 0 ; /*roll value for rcCommand*/
float KP; /*proportional gain value*/
float KD; /*proportional derivative value*/
int PD; /*output of PD controller*/
PID UserPID;
int constrain( int amt, int low, int high); /*declaring the function*/
	/*The setup function is called once at Pluto's hardware startup*/
void plutoInit ()
{
	/*Add your hardware initialization code here*/
	/*Initialize Ranging sensor*/
	XRanging.init(LEFT);
	XRanging.init(RIGHT);
}
/*The function is called once before plutoLoop when you activate Developer
Mode*/
void onLoopStart ()
{
	LED.flightStatus(DEACTIVATE); /*Disable the default led behavior*/
}
/*The loop function is called in an endless loop*/
void plutoLoop ()
{
	/*Add your repeated code here*/
	XLeft=(XRanging.getRange(LEFT))/10; /*Get sensor data in cm*/
	if (XLeft> 0 ) /*If not affected by sunlight*/
	{
		left= (0.8*XLeft)+(1-0.8)*LeftOld; /*LPF*/
	}
	else
	{
		left=LeftOld;
	}
	Monitor.print ("Left distance" , left);
	XRight=(XRanging.getRange(RIGHT))/10;
	if (XRight> 0 ) /*If not affected by sunlight*/
	{
		right=(0.8*XRight)+(1-0.8)*RightOld; /*LPF*/
	}
	else
	{
		right=RightOld;
	}
	Monitor.println( "Right distance" , right);
	PIDProfile.get(PID_USER, &UserPID); /*Get the PID data from App*/
	KP=UserPID. p /20; /*Get P value*/
	KD=UserPID. d /20; /*Get D value*/
	/*PID controller*/
	Error = right - left;
	FilError=(0.8*Error)+(1-.8)*PreError;
	Derivative = (FilError-PreError);

	PD=(KP*FilError) + (KD*(Derivative/dt));
	PD=constrain(PD, -500, 500); /*Constrain to match MAX RC Command
	value*/
	RollValue=PD+1500;
	RcCommand. set (RC_ROLL, RollValue);
	Monitor.println( "RC" , RcCommand.get(RC_ROLL));
	/*Update the values*/
	LeftOld=left;
	RightOld=right;
	PreError=FilError;
}
/*The function is called once after plutoLoop when you deactivate Developer
Mode*/
void onLoopFinish ()
{
	/*do your cleanup tasks here*/
	LED.flightStatus(ACTIVATE); /*Enable able the default led behavior*/
}
int constrain( int amt, int low, int high)
{
	if (amt < low) /*if PD value is less than -500*/
		return low;
	else if (amt > high) /*if PD value is more than 500*/
		return high;
	else
		return amt;
}





