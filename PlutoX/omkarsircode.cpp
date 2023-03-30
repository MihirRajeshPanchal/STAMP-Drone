/*#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiServer.h>
#include <WiFiUdp.h>
*/
/* 
 * ESP based Pluto Drone Controller Ver 0.1
 * Omkar M. Dandekar (Drona Aviation Pvt Ltd)
 * 
 * Hardware: Currently tested on Nodemcu
 *           for controller we need two Dual Axis joystick, 4 switches
 * Next task:                     
 *  Arduino with ESP01 (as nodemcu is only having one analog input)
 *  Arduino will send msp send commands to drone ESP via ESP01 with serial communication
 * 
 * 
Pin config is
CD4051 (MUX)-->Esp8266 



External Switches
Arm-Esp
Dev-Esp

 * 
 * 
 */
#include <Wire.h>               // Only needed for Arduino 1.6.5 and earlier
#include "SSD1306Wire.h" 
#include "image.h"
#include <ESP8266WiFi.h>
#include <Joystick.h>
SSD1306Wire display(0x3c, SDA, SCL); 

//---------MSP-------------//
#define MSP_SET_RAW_RC 200
#define MSP_SET_COMMAND 217
#define MSP_ACC_CALIBRATION 205

//---------oled------------//
#define LOGO_HEIGHT   16
#define LOGO_WIDTH    16
#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 
//------------------------------//

//------------Macros Pin config---------------//
#define S0 D5                             /* Assign Multiplexer pin S0 connect to pin D0 of NodeMCU */
#define S1 D6                             /* Assign Multiplexer pin S1 connect to pin D1 of NodeMCU /                          / Assign Multiplexer pin S2 connect to pin D2 of NodeMCU */
#define S3 D3  
#define S4 D4                        /* Assign Multiplexer pin S3 connect to pin D3 of NodeMCU */
#define SIG A0                            /* Assign SIG pin as Analog output for all 16 channels of Multiplexer to pin A0 of NodeMCU */
#define dev_sw D7
#define arm_sw D8

//--------Var---------------------//
    int decimal = 2;                          // Decimal places of the sensor value outputs 
    int sensor0;                            /* Assign the name "sensor0" as analog output value from Channel C0 */
    int sensor1;                            /* Assign the name "sensor1" as analog output value from Channel C1 */
    int sensor2;                            /* Assign the name "sensor2" as analog output value from Channel C2 */
    int sensor3;                            /* Assign the name "sensor3" as analog output value from Channel C3 */
    uint8_t checksum;
    int arm_stat=2000;
    int dev_stat=2000;
    bool flag=1; //arm-disarm stat
    int count=0; 
    int co=0;             


//-----------Enum Rc Channels------------------//
enum
{
    rc_Roll = 0, rc_Pitch, rc_Yaw, rc_Throttle, rcAux1, rcAux2, rcAux3, rcAux4,
};

enum
{
    RC_MAX = 1900,  RC_MID = 1500, RC_MIN = 1100,
};
 

//----------Pluto Wifi Configuration-----------//

const char* ssid     = "Pluto_2022_2072"; //Drone SSI
const char* password = "pluto4094";   //Drone password
const char* host = "192.168.4.1"; //DNS IP address
const uint16_t port = 23; //Port number for pluto server 
WiFiClient client;
//---------------------------------------------//


void setup() {
    display.init();
    display.flipScreenVertically();
    delay(2000);
    display.clear();
    Serial.begin(115200);
    pinMode(S0,OUTPUT);                       /* Define digital signal pin as output to the Multiplexer pin SO */        
    pinMode(S1,OUTPUT);                       /* Define digital signal pin as output to the Multiplexer pin S1 */  
    pinMode(arm_sw,INPUT);
    pinMode(dev_sw,INPUT);                      
    pinMode(SIG, INPUT);                      /* Define analog signal pin as input or receiver from the Multiplexer pin SIG */  
    pinMode(S4,INPUT_PULLUP);  
    pinMode(S3,INPUT_PULLUP);
    Serial.println(ssid);
    WiFi.begin(ssid,password);
    display.drawXbm(0, 0, WiFi_Logo_width, WiFi_Logo_height, WiFi_Logo_bits);
    display.display();
    delay(5000);
    display_lcd();
}

void loop() {

    if (!client.connect(host, port)) 
    {
       Serial.println("connection failed");
       not_connected_lcd();
       delay(5000);
       flag=1;
       return;
    }    
    /*
  //Vbat Trace
    client.write('$');
    client.write('M');
    client.write('<');
    client.write(0x00);
    client.write(0x6E); //MSP_ANALOG 110 
    client.write(0x6E); //CRC
   //trying to read      
    int reading;
    reading=client.read();
    Serial.print("Read;  ");Serial.println(reading,HEX);  
    //recieving $M<0C8C8 ? Msp raw set rc ?? does t send ac?
    //Do we need to add frame parsing bit by bit ? 
  */

    int butt=digitalRead(S4);
    int butt1=digitalRead(S3);  
    int butt3=digitalRead(arm_sw);
    int butt4=digitalRead(dev_sw);
digitalWrite(S0,LOW); digitalWrite(S1,LOW);
    sensor0 = analogRead(SIG);
  
    // Channel 1 (C1 pin - binary output 1,0,0)
    digitalWrite(S0,HIGH); digitalWrite(S1,LOW); 
    sensor1 = analogRead(SIG);
  
    // Channel 2 (C2 pin - binary output 0,1,0)
    digitalWrite(S0,LOW); digitalWrite(S1,HIGH);
    sensor2 = analogRead(SIG);

    // Channel 3 (C3 pin - binary output 1,1,0)
    digitalWrite(S0,HIGH); digitalWrite(S1,HIGH); 
    sensor3 = analogRead(SIG);

 
    if(butt==0)
    {   delay(50);
        land();
    }

    if(butt1==0)
    {
        delay(50);
        t_off();
    }

    if(butt3==0)
    {
        arm_stat=2000;
        disarm_lcd();        
    }
    else{
        arm_stat=1500;
        arm_lcd();    
    } 
    

    if(butt4==0)
    {
        dev_stat=2000;
        
    }
    else
    { 
        dev_stat=1500;
        dev_lcd();       
    }    

  
    rcState();   //MSP_200 
      
}

void rcState()
{
    
    uint32_t init_t = millis();
    static uint32_t preTime = 0;
    uint16_t rc16[8];
    uint8_t rc8[16];

    if((init_t - preTime) > 5)
    {
        rc16[rc_Roll] = map(sensor1,0, 1023,1000, 2000);          // map your joystic 2 here
        rc16[rc_Pitch] = map(sensor0,0, 1023,1000, 2000);         // map your joystic 2 here
        rc16[rc_Yaw] = map(sensor2,0,1023,1000, 2000);           // map your joystic 1 here
        rc16[rc_Throttle] = map(sensor3,0, 1023,1000, 2000); 
        rc16[rcAux1] = RC_MAX;   //900 < AUX1 < 1300 : MAGHOLD ON 1300 < AUX1 < 1700 : HEADFREE MODE ON
        rc16[rcAux2] = dev_stat; // AUX2 = 1500, the User code runs (Developer mode On) //Map Button 1 
        rc16[rcAux3] = RC_MID;   //1300 <AUX3 < 1700 : Alt Hold mode on Outside the above range : Throttle range
        rc16[rcAux4] = arm_stat; //1300 < AUX4 < 1700 : “ARM” the Drone Outside this range : DISARM the Drone. //Map Button 2 
        
//*--------CRC-------------*//  
        checksum = 16^200;
        for (uint8_t i = 0; i < 8; i++)
        {
            rc8[2 * i] = rc16[i] & 0xff;
            rc8[2 * i + 1] = (rc16[i] >> 8) & 0xff;

            checksum = checksum^rc8[2 * i]^rc8[2 * i + 1];
        }
//------------MSP Frame sending--------------//
        client.write('$');
        client.write('M');
        client.write('<');
        client.write(16);
        client.write(MSP_SET_RAW_RC);
        for(uint8_t i = 0; i < 16; i++)
            client.write(rc8[i]);
        client.write(checksum);
        preTime = init_t;

    }
  Serial.println("rc_th");
  Serial.println(rc_Roll);
}

void t_off(){
    arm_stat=2000;
    rcState();
    delay(50);
    arm_stat=1500;
    rcState();
    client.write('$');
    client.write('M');
    client.write('<');
    client.write(0x02);
    client.write(0xd9);
    client.write(0x01);
    client.write(0x00);
    client.write(0xda); //crc is hardcoded  02^d9=^01 = crc
    
}

void land(){
    client.write('$');
    client.write('M');
    client.write('<');
    client.write(0x02);
    client.write(0xd9);
    client.write(0x02);
    client.write(0x00);
    client.write(0xd9); //crc      
    for(int b=0;b<5000;b++)
        rcState();            
    arm_stat=2000;   
}
      
void display_lcd(){
    display.setFont(ArialMT_Plain_10);
    display.drawString(15, 0, "PLUTO CONTROLLER");
    display.display();

}

void arm_lcd(){
    display.clear();
    display_lcd();
    display.setFont(ArialMT_Plain_10);
    display.drawString(10, 15, "CONNECTED");
    display.setFont(ArialMT_Plain_24);
    display.drawString(10, 30, "ARMED");
    display.display();
}

void dev_lcd(){
    display.clear();
    display_lcd();
    display.setFont(ArialMT_Plain_10);
    display.drawString(100, 15, "DEV");
    display.display();
}

void disarm_lcd(){
    display.clear();
    display_lcd();
    display.setFont(ArialMT_Plain_24);
    display.setFont(ArialMT_Plain_10);
    display.drawString(10, 15, "CONNECTED");
    display.setFont(ArialMT_Plain_24);
    display.drawString(10, 30, "DISARM");
    display.display();
}

void not_connected_lcd(){
    display.clear();
    display_lcd();
    display.setFont(ArialMT_Plain_16);
    display.drawString(0, 20, "DISCONNECTED");
    display.display();
}

void connected_lcd(){
    display_lcd();
    display.setFont(ArialMT_Plain_10);
    display.drawString(10, 15, "CONNECTED");
    display.display();
}