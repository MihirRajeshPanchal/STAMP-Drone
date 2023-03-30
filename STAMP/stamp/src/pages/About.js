import {
  Heading,
  Box,
  Text,
  CardBody,
  Image,
  Stack,
  Card,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import images from '../assets/images.jpg';
import mihir from '../assets/mihir.jpg';
import prinkal from '../assets/prinkal.jpg';
import arsh from '../assets/arsh.jpg';
import tanay from '../assets/tanay.jpg';
import sarid from '../assets/sarid.jpg';
import React from 'react';
import '../components/AboutUs/about.css';
import ContactUs from '../components/AboutUs/ContactUs';
import TeamMembers from '../components/AboutUs/TeamMembers';
import Section1 from '../components/AboutUs/Section1';
const About = () => {
  return (
    <div>
      <Section1></Section1>
    

      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Heading color={'#4299E1'} marginBottom={'30px'} padding={'10px'}>
          About Us
        </Heading>
      </div>
        
      <center>
        <Card
        className='card-main'
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          marginBottom={'50px'}
          width={'800px'}
        >
          <Image
          className='image-drone'
            objectFit="contained"
            maxW={{ base: '100%', sm: '200px' }}
            src={images}
            alt="Drone"
          />

          <Stack>
            <CardBody>
              <Heading size="md" color={'#4299E1'}>
                STAMP
              </Heading>

              <Text py="2" fontSize={'sm'} fontFamily={'sans-serif'}>
                Description
              </Text>
            </CardBody>
          </Stack>
        </Card>
        </center> */}

        {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Heading color={'#4299E1'} marginBottom={'30px'} padding={'10px'}>
          About Team Members
        </Heading>
      </div>
       */}
<TeamMembers></TeamMembers>
      {/* <div
      className='users'
        style={{
          display: 'flex',
          flexDirection: {sm: 'column', lg: 'row'},
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <center><Box
          padding={'10px'}
          w={'200px'}
          borderRadius={'10px'}
          h={'200px'}
          border={'1px'}
        >
            <img src={mihir} height={'100px'} width={'100px'}></img>
            Mihir HERO</Box></center>

        <center><Box
          padding={'10px'}
          w={'200px'}
          borderRadius={'10px'}
          h={'200px'}
          border={'1px'}
        > 
        
        <img src={prinkal} height={'100px'} width={'100px'}></img>
        Prinkal QUARKLY</Box></center>

        <center><Box
          padding={'10px'}
          w={'200px'}
          borderRadius={'10px'}
          h={'200px'}
          border={'1px'}
        >
            <img src={arsh} height={'100px'} width={'86px'}></img>
            ARSH</Box></center>

        <center><Box
          padding={'10px'}
          w={'200px'}
          borderRadius={'10px'}
          h={'200px'}
          border={'1px'}
        >
            <img src={tanay} height={'100px'} width={'93px'}></img>
            TANAY</Box></center>

        <center><Box
          padding={'10px'}
          w={'200px'}
          borderRadius={'10px'}
          h={'200px'}
          border={'1px'}
        >
            <img src={sarid} height={'85px'} width={'86px'}></img>
            SARID</Box></center>
      </div> */}
      {/* <ContactUs></ContactUs> */}
    </div>
    
  );
};

export default About;
