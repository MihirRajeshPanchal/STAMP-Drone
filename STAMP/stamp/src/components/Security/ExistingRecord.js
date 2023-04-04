// import {
//     chakra,
//     Flex,
//     Box,
//     Image,
//   } from '@chakra-ui/react';
// import React from "react";
// import mihir from '../../assets/mihir.jpg';
// import prinkal from '../../assets/prinkal.jpg';
// import arsh from '../../assets/arsh.jpg';
// import tanay from '../../assets/tanay.jpg';
// import sarid from '../../assets/sarid.jpg';
//   const ExistingRecord = () => {
//     return (
//       <div>
//         <Flex
//   bg="#edf3f8"
//   _dark={{
//     bg: "#3e3e3e",
//   }}
//   p={50}
//   w="full"
//   alignItems="center"
//   justifyContent="center"
// >
//   <Box
//     maxW="xs"
//     mx="auto"
//     bg="white"
//     _dark={{
//       bg: "gray.800",
//     }}
//     shadow="lg"
//     rounded="lg"
//   >
//     <Box px={4} py={2}>
//       <chakra.h4
//         color="gray.800"
//         _dark={{
//           color: "white",
//         }}
//         fontWeight="bold"
//         fontSize="3xl"
//         textTransform="uppercase"
//       >
//         Prinkal Doshi
//       </chakra.h4>
//       <chakra.p
//         mt={1}
//         fontSize="sm"
//         color="gray.600"
//         _dark={{
//           color: "gray.400",
//         }}
//       >
//        prinkaldoshi@gmail.com
//       </chakra.p>
//     </Box>

//     <Image
//       h={48}
//       w="full"
//       fit="cover"
//       mt={2}
//       src={prinkal}
//     />

//     <Flex
//       alignItems="center"
//       justifyContent="space-between"
//       px={4}
//       py={2}
//       bg="gray.900"
//       roundedBottom="lg"
//     >
//       <chakra.button color="white" fontWeight="bold" fontSize="lg">
//         Find
//       </chakra.button>
//       <chakra.button
//         px={2}
//         py={1}
//         bg="white"
//         fontSize="xs"
//         color="gray.900"
//         fontWeight="bold"
//         rounded="lg"
//         textTransform="uppercase"
//         _hover={{
//           bg: "gray.200",
//         }}
//         _focus={{
//           bg: "gray.400",
//         }}
//       >
//         Retrain
//       </chakra.button>
//     </Flex>
//   </Box>

//   <Box
//     maxW="xs"
//     mx="auto"
//     bg="white"
//     _dark={{
//       bg: "gray.800",
//     }}
//     shadow="lg"
//     rounded="lg"
//   >
//     <Box px={4} py={2}>
//       <chakra.h4
//         color="gray.800"
//         _dark={{
//           color: "white",
//         }}
//         fontWeight="bold"
//         fontSize="3xl"
//         textTransform="uppercase"
//       >
//         Mihir Panchal
//       </chakra.h4>
//       <chakra.p
//         mt={1}
//         fontSize="sm"
//         color="gray.600"
//         _dark={{
//           color: "gray.400",
//         }}
//       >
//        mihirpanchal@gmail.com
//       </chakra.p>
//     </Box>

//     <Image
//       h={48}
//       w="full"
//       fit="cover"
//       mt={2}
//       src={mihir}
//     />

//     <Flex
//       alignItems="center"
//       justifyContent="space-between"
//       px={4}
//       py={2}
//       bg="gray.900"
//       roundedBottom="lg"
//     >
//       <chakra.button color="white" fontWeight="bold" fontSize="lg">
//         Find
//       </chakra.button>
//       <chakra.button
//         px={2}
//         py={1}
//         bg="white"
//         fontSize="xs"
//         color="gray.900"
//         fontWeight="bold"
//         rounded="lg"
//         textTransform="uppercase"
//         _hover={{
//           bg: "gray.200",
//         }}
//         _focus={{
//           bg: "gray.400",
//         }}
//       >
//         Retrain
//       </chakra.button>
//     </Flex>
//   </Box>

// <Box
//     maxW="xs"
//     mx="auto"
//     bg="white"
//     _dark={{
//       bg: "gray.800",
//     }}
//     shadow="lg"
//     rounded="lg"
//   >
//     <Box px={4} py={2}>
//       <chakra.h4
//         color="gray.800"
//         _dark={{
//           color: "white",
//         }}
//         fontWeight="bold"
//         fontSize="3xl"
//         textTransform="uppercase"
//       >
//         Sarid Qureshi
//       </chakra.h4>
//       <chakra.p
//         mt={1}
//         fontSize="sm"
//         color="gray.600"
//         _dark={{
//           color: "gray.400",
//         }}
//       >
//        saridqureshi@gmail.com
//       </chakra.p>
//     </Box>

//     <Image
//       h={48}
//       w="full"
//       fit="cover"
//       mt={2}
//       src={sarid}
//     />

//     <Flex
//       alignItems="center"
//       justifyContent="space-between"
//       px={4}
//       py={2}
//       bg="gray.900"
//       roundedBottom="lg"
//     >
//       <chakra.button color="white" fontWeight="bold" fontSize="lg">
//         Find
//       </chakra.button>
//       <chakra.button
//         px={2}
//         py={1}
//         bg="white"
//         fontSize="xs"
//         color="gray.900"
//         fontWeight="bold"
//         rounded="lg"
//         textTransform="uppercase"
//         _hover={{
//           bg: "gray.200",
//         }}
//         _focus={{
//           bg: "gray.400",
//         }}
//       >
//         Retrain
//       </chakra.button>
//     </Flex>
//   </Box>

//   <Box
//     maxW="xs"
//     mx="auto"
//     bg="white"
//     _dark={{
//       bg: "gray.800",
//     }}
//     shadow="lg"
//     rounded="lg"
//   >
//     <Box px={4} py={2}>
//       <chakra.h4
//         color="gray.800"
//         _dark={{
//           color: "white",
//         }}
//         fontWeight="bold"
//         fontSize="3xl"
//         textTransform="uppercase"
//       >
//         Tanay Desaiiii 
//       </chakra.h4>
//       <chakra.p
//         mt={1}
//         fontSize="sm"
//         color="gray.600"
//         _dark={{
//           color: "gray.400",
//         }}
//       >
//        tanaydesai@gmail.com
//       </chakra.p>
//     </Box>

//     <Image
//       h={48}
//       w="full"
//       fit="cover"
//       mt={2}
//       src={tanay}
//     />

//     <Flex
//       alignItems="center"
//       justifyContent="space-between"
//       px={4}
//       py={2}
//       bg="gray.900"
//       roundedBottom="lg"
//     >
//       <chakra.button color="white" fontWeight="bold" fontSize="lg">
//         Find
//       </chakra.button>
//       <chakra.button
//         px={2}
//         py={1}
//         bg="white"
//         fontSize="xs"
//         color="gray.900"
//         fontWeight="bold"
//         rounded="lg"
//         textTransform="uppercase"
//         _hover={{
//           bg: "gray.200",
//         }}
//         _focus={{
//           bg: "gray.400",
//         }}
//       >
//         Retrain
//       </chakra.button>
//     </Flex>
//   </Box>
//   </Flex>

//   <Flex
//   bg="#edf3f8"
//   _dark={{
//     bg: "#3e3e3e",
//   }}
//   w="full"
// >  <Box
//     maxW="xs"
//     mx="auto"
//     bg="white"
//     _dark={{
//       bg: "gray.800",
//     }}
//     shadow="lg"
//     rounded="lg"
//   >
//     <Box px={4} py={2}>
//       <chakra.h4
//         color="gray.800"
//         _dark={{
//           color: "white",
//         }}
//         fontWeight="bold"
//         fontSize="3xl"
//         textTransform="uppercase"
//       >
//        Arsh Sakaria
//       </chakra.h4>
//       <chakra.p
//         mt={1}
//         fontSize="sm"
//         color="gray.600"
//         _dark={{
//           color: "gray.400",
//         }}
//       >
//        arshkumarsakaria@gmail.com
//       </chakra.p>
//     </Box>

//     <Image
//       h={48}
//       w="full"
//       fit="cover"
//       mt={2}
//       src={arsh }
//     />

//     <Flex
//       alignItems="center"
//       justifyContent="space-between"
//       px={4}
//       py={2}
//       bg="gray.900"
//       roundedBottom="lg"
//     >
//       <chakra.button color="white" fontWeight="bold" fontSize="lg">
//         Find
//       </chakra.button>
//       <chakra.button
//         px={2}
//         py={1}
//         bg="white"
//         fontSize="xs"
//         color="gray.900"
//         fontWeight="bold"
//         rounded="lg"
//         textTransform="uppercase"
//         _hover={{
//           bg: "gray.200",
//         }}
//         _focus={{
//           bg: "gray.400",
//         }}
//       >
//         Retrain
//       </chakra.button>
//     </Flex>
//   </Box>
//     </Flex> 
//       </div>

//     );
//   };

//   export default ExistingRecord;


import React from 'react';
import { Flex, Spacer, Button, Text, useMediaQuery, Image } from '@chakra-ui/react';
import { FaTools, FaHandshake, FaStar } from 'react-icons/fa';
import mihir from '../../assets/mihir.jpg';
import prinkal from '../../assets/prinkal.jpg';
import arsh from '../../assets/arsh.jpg';
import tanay from '../../assets/tanay.jpg';
import sarid from '../../assets/sarid.jpg';

const AboutUs = () => {
  
  const [isLargerThan48] = useMediaQuery('(min-width: 48em)');

  const array = [
    {
      id: 1,
      text: 'Prinkal Doshi',
      image: prinkal,
      subheading: 'prinkaldoshi@gmail.com',
    },
    {
      id: 2,
      text: 'Mihir Panchal',
      image: mihir,
      subheading: 'mihirpanchal@gmail.com',
    },
    {
      id: 3,
      text: 'Tanay Desai',
      image: tanay,
      subheading: 'tanaydesai@gmail.com',
    },
    {
      id: 4,
      text: 'Sarid Qureshi',
      image: sarid,
      subheading: 'saridqureshi@gmail.com',
    },
    {
      id: 5,
      text: 'Arsh Sakaria',
      image: arsh,
      subheading: 'arshsakaria@gmail.com',
    },
  ];

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
            marginTop="20px"
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
            <Button backgroundColor="blue.400" padding="8px" marginTop="10px">Retrain</Button>            
          </Flex>
          <Spacer />
        </>
      ))}
    </Flex>
  );
};

export default AboutUs;