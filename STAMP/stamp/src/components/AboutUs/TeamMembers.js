import React from 'react';
import { Flex, Spacer, Text, useMediaQuery, Icon, Image, useColorMode } from '@chakra-ui/react';
import { FaTools, FaHandshake, FaStar } from 'react-icons/fa';
import mihir from '../../assets/mihir.jpg';
import prinkal from '../../assets/prinkal.jpg';
import arsh from '../../assets/arsh.jpg';
import tanay from '../../assets/tanay.jpg';
import sarid from '../../assets/sarid.jpg';

const AboutUs = () => {
  const [isLargerThan48] = useMediaQuery('(min-width: 48em)');
  const { colorMode, toggleColorMode } = useColorMode();


  const array = [
    {
      id: 1,
      text: 'Prinkal Doshi',
      image: prinkal,
      subheading: 'Web Developer',

    },
    {
      id: 2,
      text: 'Mihir Panchal',
      image: mihir,
      subheading: 'Full Stack Developer',
    },
    {
      id: 3,
      text: 'Tanay Desai',
      image: tanay,
      subheading: 'Web Developer',
    },
    {
      id: 4,
      text: 'Sarid Qureshi',
      image: sarid,
      subheading: 'Backend Developer',
    },
    {
      id: 5,
      text: 'Arsh Sakaria',
      image: arsh,
      subheading: 'Drone Programmer',
    },
  ];

  return (
    <>
      <center><Text
        mb={2}
        fontSize="5xl"
        fontWeight="bold"
        lineHeight="tight"
        bgGradient="linear(to-r, brand.300, brand.600)"
        bgClip="text"
        color={colorMode === 'light' ? 'black' : 'white'}
      >
        Team Members
      </Text></center>
      <Flex
        minH="0vh"
        alignItems="center"
        justifyContent="space-between"
        w="full"
        py="16"
        px={isLargerThan48 ? '20' : '0'}
        flexWrap="wrap"
        flexDirection={isLargerThan48 ? 'row' : 'column'}
      >
        {array.map((arr) => (
          <>
            <Flex
              height="200px"
              bg="blackAlpha.200"
              width={isLargerThan48 ? '18%' : 'full'}
              shadow="md"
              p="6"
              alignItems="center"
              justifyContent="center"
              borderRadius="md"
              flexDirection="column"
              textAlign="center"
              mb={isLargerThan48 ? '0' : '4'}
              border="1px solid #C4DDFF"
            >

              <Image src={arr.image} borderRadius="full" boxSize="60%" objectFit="cover" />
              <Text fontSize="xl" fontWeight="semibold" mt="4">{arr.text}</Text>
              <Text fontSize="sm" color="gray.600">{arr.subheading}</Text>
            </Flex>

            <Spacer />
          </>
        ))}
      </Flex>
    </>
  );
};

export default AboutUs;