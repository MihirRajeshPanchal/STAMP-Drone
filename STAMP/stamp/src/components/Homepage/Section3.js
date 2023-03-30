import React from "react";
import { Image, Box, Button, chakra, Flex, SimpleGrid } from "@chakra-ui/react";
import DroneGPT from '../../assets/dronegpt.jpg';
import FaceRecog from '../../assets/faceRecog.png';
export default function App(){
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={20}
      w="full"
      justifyContent="center"
      alignItems="center"
      pos="absolute"
    >
      <Box
        shadow="xl"
        bg="white"
        _dark={{ bg: "gray.800" }}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
            >
             DroneGPT - Your Personal Drone Services Assistant
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
DroneGPT is a personal assistant for all drone services needs, providing personalized recommendations and guidance on how to optimize drone services. With its advanced AI algorithms and vast knowledge base, DroneGPT can answer questions. The easy-to-use interface and intuitive design make it hassle-free to get accurate and helpful responses. DroneGPT is here to take your drone services to the next level.    </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg="gray.900"
              _dark={{ bg: "gray.700" }}
              _hover={{ bg: "gray.700", _dark: { bg: "gray.600" } }}
              color="gray.100"
              as="a"
            >
              Learn More
            </Button>
          </Box>
          <Box
            // py={48}
          >
            <Image
          h="fit"
          w="fit"
          src={DroneGPT}
          alt=""
          loading="lazy"
        />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "initial", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
            >
              Personalized Recognition: Train Drone to Recognize U
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
               The personalized recognition system allows you to train your drone to recognize you and respond accordingly. You can provide images of yourself to the drone's AI algorithms, which create a unique profile of your face and other features. 
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg="gray.900"
              _dark={{ bg: "gray.700" }}
              _hover={{ bg: "gray.700", _dark: { bg: "gray.600" } }}
              color="gray.100"
              as="a"
            >
              Learn More
            </Button>
          </Box>
          <Box
           
          >
              <Image
          h="fit"
          w="fit"
          src={FaceRecog}
          alt=""
          loading="lazy"
        />
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
