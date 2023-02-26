/*Do not remove the include below*/
#include "PlutoPilot.h"
#include "Utils.h"
#include "Sensor.h"
int16_t initemp;
int16_t currtemp;
/*The setup function is called once at Pluto's hardware startup*/
void plutoInit ()
{
/*Add your hardware initialization code here*/
}
/*The function is called once before plutoLoop when you activate Developer
Mode*/
void onLoopStart ()
{
/*do your one time tasks here*/
LED.flightStatus(DEACTIVATE); /*Disable the default led behaviour*/
LED.set(BLUE, ON);
initemp= Barometer.get( TEMPERATURE )/100; /*Get initial temperature
when you turn ON the developer mode */
Monitor.print( "initemp" , initemp);
}
/*The loop function is called in an endless loop*/
void plutoLoop ()
{
/*Add your repeated code here*/
	currtemp= Barometer.get( TEMPERATURE ) /100; /*Get current
	Temperature*/
	Graph.red(initemp, 1);
	Graph.green(currtemp, 1);
	Monitor.println( "Currenttemp" , currtemp);
	/*Check the relation between initial and current temperature and turn on
	LED for indicating different conditions*/
	if (currtemp>initemp)
	{
	LED.set(RED, ON);
	LED.set(BLUE, OFF);
	Monitor.println( "HOT" );
	}
	else if (currtemp<initemp)
	{
	LED.set(GREEN, ON);
	LED.set(BLUE, OFF);
	Monitor.println( "COOL " );
	}
	else
	{
	Monitor.println( "EQUAL" );
	LED.set(BLUE, ON);
	LED.set(RED, OFF);
	LED.set(GREEN, OFF);
	}
	}
	/*The function is called once after plutoLoop when you deactivate Developer
	Mode*/
	void onLoopFinish ()
	{
	/*do your cleanup tasks here*/
		LED.flightStatus(ACTIVATE); /*Enable the default led behavior*/
	}
