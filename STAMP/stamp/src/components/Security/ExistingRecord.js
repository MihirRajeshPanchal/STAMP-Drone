import {
    chakra,
    Flex,
    Box,
    Image,
  } from '@chakra-ui/react';
import React from "react";
import mihir from '../../assets/mihir.jpg';
import prinkal from '../../assets/prinkal.jpg';
import arsh from '../../assets/arsh.jpg';
import tanay from '../../assets/tanay.jpg';
import sarid from '../../assets/sarid.jpg';
  const ExistingRecord = () => {
    return (
      <div>
        <Flex
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
    maxW="xs"
    mx="auto"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
  >
    <Box px={4} py={2}>
      <chakra.h4
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
        fontSize="3xl"
        textTransform="uppercase"
      >
        Prinkal Doshi
      </chakra.h4>
      <chakra.p
        mt={1}
        fontSize="sm"
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
       prinkaldoshi@gmail.com
      </chakra.p>
    </Box>

    <Image
      h={48}
      w="full"
      fit="cover"
      mt={2}
      src={prinkal}
    />

    <Flex
      alignItems="center"
      justifyContent="space-between"
      px={4}
      py={2}
      bg="gray.900"
      roundedBottom="lg"
    >
      <chakra.button color="white" fontWeight="bold" fontSize="lg">
        Find
      </chakra.button>
      <chakra.button
        px={2}
        py={1}
        bg="white"
        fontSize="xs"
        color="gray.900"
        fontWeight="bold"
        rounded="lg"
        textTransform="uppercase"
        _hover={{
          bg: "gray.200",
        }}
        _focus={{
          bg: "gray.400",
        }}
      >
        Retrain
      </chakra.button>
    </Flex>
  </Box>

  <Box
    maxW="xs"
    mx="auto"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
  >
    <Box px={4} py={2}>
      <chakra.h4
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
        fontSize="3xl"
        textTransform="uppercase"
      >
        Mihir Panchal
      </chakra.h4>
      <chakra.p
        mt={1}
        fontSize="sm"
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
       mihirpanchal@gmail.com
      </chakra.p>
    </Box>

    <Image
      h={48}
      w="full"
      fit="cover"
      mt={2}
      src={mihir}
    />

    <Flex
      alignItems="center"
      justifyContent="space-between"
      px={4}
      py={2}
      bg="gray.900"
      roundedBottom="lg"
    >
      <chakra.button color="white" fontWeight="bold" fontSize="lg">
        Find
      </chakra.button>
      <chakra.button
        px={2}
        py={1}
        bg="white"
        fontSize="xs"
        color="gray.900"
        fontWeight="bold"
        rounded="lg"
        textTransform="uppercase"
        _hover={{
          bg: "gray.200",
        }}
        _focus={{
          bg: "gray.400",
        }}
      >
        Retrain
      </chakra.button>
    </Flex>
  </Box>

<Box
    maxW="xs"
    mx="auto"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
  >
    <Box px={4} py={2}>
      <chakra.h4
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
        fontSize="3xl"
        textTransform="uppercase"
      >
        Sarid Qureshi
      </chakra.h4>
      <chakra.p
        mt={1}
        fontSize="sm"
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
       saridqureshi@gmail.com
      </chakra.p>
    </Box>

    <Image
      h={48}
      w="full"
      fit="cover"
      mt={2}
      src={sarid}
    />

    <Flex
      alignItems="center"
      justifyContent="space-between"
      px={4}
      py={2}
      bg="gray.900"
      roundedBottom="lg"
    >
      <chakra.button color="white" fontWeight="bold" fontSize="lg">
        Find
      </chakra.button>
      <chakra.button
        px={2}
        py={1}
        bg="white"
        fontSize="xs"
        color="gray.900"
        fontWeight="bold"
        rounded="lg"
        textTransform="uppercase"
        _hover={{
          bg: "gray.200",
        }}
        _focus={{
          bg: "gray.400",
        }}
      >
        Retrain
      </chakra.button>
    </Flex>
  </Box>

  <Box
    maxW="xs"
    mx="auto"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
  >
    <Box px={4} py={2}>
      <chakra.h4
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
        fontSize="3xl"
        textTransform="uppercase"
      >
        Tanay Desaiiii 
      </chakra.h4>
      <chakra.p
        mt={1}
        fontSize="sm"
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
       tanaydesai@gmail.com
      </chakra.p>
    </Box>

    <Image
      h={48}
      w="full"
      fit="cover"
      mt={2}
      src={tanay}
    />

    <Flex
      alignItems="center"
      justifyContent="space-between"
      px={4}
      py={2}
      bg="gray.900"
      roundedBottom="lg"
    >
      <chakra.button color="white" fontWeight="bold" fontSize="lg">
        Find
      </chakra.button>
      <chakra.button
        px={2}
        py={1}
        bg="white"
        fontSize="xs"
        color="gray.900"
        fontWeight="bold"
        rounded="lg"
        textTransform="uppercase"
        _hover={{
          bg: "gray.200",
        }}
        _focus={{
          bg: "gray.400",
        }}
      >
        Retrain
      </chakra.button>
    </Flex>
  </Box>
  </Flex>

  <Flex
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  w="full"
>  <Box
    maxW="xs"
    mx="auto"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
  >
    <Box px={4} py={2}>
      <chakra.h4
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
        fontSize="3xl"
        textTransform="uppercase"
      >
       Arsh Sakaria
      </chakra.h4>
      <chakra.p
        mt={1}
        fontSize="sm"
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
       arshkumarsakaria@gmail.com
      </chakra.p>
    </Box>

    <Image
      h={48}
      w="full"
      fit="cover"
      mt={2}
      src={arsh }
    />

    <Flex
      alignItems="center"
      justifyContent="space-between"
      px={4}
      py={2}
      bg="gray.900"
      roundedBottom="lg"
    >
      <chakra.button color="white" fontWeight="bold" fontSize="lg">
        Find
      </chakra.button>
      <chakra.button
        px={2}
        py={1}
        bg="white"
        fontSize="xs"
        color="gray.900"
        fontWeight="bold"
        rounded="lg"
        textTransform="uppercase"
        _hover={{
          bg: "gray.200",
        }}
        _focus={{
          bg: "gray.400",
        }}
      >
        Retrain
      </chakra.button>
    </Flex>
  </Box>
    </Flex> 
      </div>
      
    );
  };
  
  export default ExistingRecord;
  