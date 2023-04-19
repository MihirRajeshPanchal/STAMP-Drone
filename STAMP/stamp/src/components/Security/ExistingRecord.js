import React from 'react';
import { Flex, Spacer, Button, Text, useMediaQuery, Image, Stack, useToast } from '@chakra-ui/react';
import { FaTools, FaHandshake, FaStar } from 'react-icons/fa';
import mihir from '../../assets/mihir.jpg';
import prinkal from '../../assets/prinkal.jpg';
import arsh from '../../assets/arsh.jpg';
import tanay from '../../assets/tanay.jpg';
import sarid from '../../assets/sarid.jpg';
import data from './details.json';
import defaultProfile from './default.png';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  const [isLargerThan48] = useMediaQuery('(min-width: 48em)');
  const toast = useToast();

  const array = data.map(item => ({
    id: item.id,
    text: `${item.first_name} ${item.last_name}`,
    image: item.image,
    subheading: item.email,
  }));

  const find = () => {
    navigate("/Security/Detect");
  }

  const retrain = (fullName, email) => {
    console.log(fullName, email);
    fetch("http://127.0.0.1:5000/single_face_train", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email
        })
    })
    .then(response => {
        if (response.ok) {
          console.log("Face Trained Successfully");
          toast({
              title: `Face Trained successfully`,
              status: "success",
              duration: 3000,
              isClosable: true,
            });
        } else {
        console.log("Error while sending details");
        }
    })
    .catch(error => {
        console.log(error);
    });
  }

  return (
    <Flex
      minH="70vh"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      py="16"
      px={isLargerThan48 ? '20' : '6'}
      flexWrap="wrap"
      flexDirection={isLargerThan48 ? 'row' : 'column'}
    >
      {array.map((arr) => (
        <>
          <Flex
            height="230px"
            bg="blackAlpha.200"
            width={isLargerThan48 ? '18%' : 'full'}
            shadow="md"
            p="6"
            marginTop='20px'
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            flexDirection="column"
            textAlign="center"
            mb={isLargerThan48 ? '0' : '4'}
            border="1px solid #C4DDFF"
          >
            <Image src={defaultProfile} borderRadius="full" boxSize="60%" objectFit="cover" />
            <Text fontSize="xl" fontWeight="semibold" >{arr.text}</Text>
            <Text fontSize="sm" color="gray.600">{arr.subheading}</Text>
            <Stack spacing={4} direction={'row'} align={'center'} paddingTop='10px'>
              <Button colorScheme='blue' size={'sm'} onClick={find}>Find</Button>
              <Button colorScheme='blue' size={'sm'} onClick={() => retrain(arr.text, arr.subheading)}>Retrain</Button>
            </Stack>         
          </Flex>
          <Spacer />
        </>
      ))}
    </Flex>
  );
};

export default AboutUs;