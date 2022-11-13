//To get Pressure Readings

// Do not remove the include below
#include "PlutoPilot.h"
#include "Sensor.h"
#include "Utils.h"

int32_t baropressure;

/*The setup function is called once at Pluto's hardware startup*/
void plutoInit ()
{
	/*Add your hardware initialization code here*/
}

/*The function is called once before plutoLoop when you activate Developer Mode*/
void onLoopStart ()
{
	/*do your one time tasks here*/
}

/*The loop function is called in an endless loop*/
void plutoLoop ()
{
	/*Add your repeated code here*/
	baropressure=Barometer.get(PRESSURE);
	Monitor.println("Pressure", baropressure);
	Graph.red(baropressure);
}

/*The function is called once after plutoLoop when you deactivate Developer Mode*/
void onLoopFinish ()
{
	/*do your cleanup tasks here*/
}


//Main User Code

///* Do not remove the include below*/
//#include "PlutoPilot.h"
//#include "Control.h"
//#include "Sensor.h"
//#include "User.h"
//#include "Utils.h"
//#include "Math.h"
//
//int16_t initPressure;
//int16_t currPressure;
//
///*The setup function is called once at Pluto's hardware startup*/
//void plutoInit ()
//{
//	/* Add your hardware initialization code here*/
//}
//
///*The function is called once before plutoLoop when you activate Developer Mode*/
//void onLoopStart ()
//{
//	/*do your one time tasks here*/
//	initPressure=Barometer.get(PRESSURE); /*Get Initial Temperature
//	when you turn the developer mode*/
//	LED.flightStatus(DEACTIVATE); /*Disable the default led behavior*/
//}
//
///*The loop function is called in an endless loop*/
//void plutoLoop ()
//{
//	/*Add your repeated code here*/
//	currPressure=Barometer.get(PRESSURE); /*Get pressure values continuously*/
//	if (fabs(currPressure-initPressure)> 8 ) /*calculate if the difference between the current pressure and on start or initial pressure is greater than 8*/
//	{
//		LED. set (RED, ON); /*turn on led to indicate if condition is true*/
//		Command.arm(); /*arm the drone*/
//		DesiredPosition. set (Z, 100 ); /*set the drone altitude to 100cms*/
//	}
//	initPressure=((initPressure*0.9)+(currPressure*0.1));
//	Monitor.println( "oldPressure" , initPressure);
//	Monitor.println( "newPressure" , currPressure);
//	Graph.red(currPressure);
//}
///*The function is called once after plutoLoop when you deactivate Developer Mode*/
//void onLoopFinish ()
//{
//	/*do your cleanup tasks here*/
//	LED.flightStatus(ACTIVATE); /*Enable the default led behavior*/
//}
