import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  Button,
  useColorMode,
} from "@chakra-ui/react";

export default function App(){
  const topBg = useColorModeValue("gray.100", "gray.700");
  const bottomBg = useColorModeValue("white", "gray.800");
  const { colorMode, toggleColorMode } = useColorMode();
  const Feature = (props) => {
    return (
      <Flex align="center">
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color="brand.500"
            _dark={{ color: "brand.300" }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.span mt={2} color="gray.500" _dark={{ color: "gray.400" }}>
            {props.children}
          </chakra.span>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      boxSize="full"
      bg="#F9FAFB"
      _dark={{ bg: "gray.600" }}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
        rounded="md"
        shadow="base"
        w="full"
        bg={bottomBg}
      >
        <Box pt={0} rounded="md" bg={topBg}>
          <Box w="full" px={[10, , 4]} mx="auto">
            <Text
              mb={2}
              fontSize="5xl"
              fontWeight="bold"
              lineHeight="tight"
              bgGradient="linear(to-r, brand.300, brand.600)"
              bgClip="text"
              color={colorMode === 'light' ? 'black' : 'white'}
            >
                About STAMP            
            </Text>
            <chakra.p
              mb={6}
              fontSize={["lg", , "xl"]}
              color="gray.600"
              _dark={{ color: "gray.400" }}
            >
              Empowering Your Security, One Flight at a Time.
            </chakra.p>
          </Box>
          <Box bgGradient={`linear(to-b, ${topBg} 50%, ${bottomBg} 50%)`}>
            <Flex
              rounded="md"
              mx={10}
              bg={bottomBg}
              shadow="xl"
              mb="100px"
              textAlign="left"
              direction={{ base: "column", lg: "row" }}
            >
              <Stack spacing={8} p="45px" >
               
                <chakra.p
                  fontSize={["sm", , "md"]}
                  color="gray.600"
                  _dark={{ color: "gray.400" }}
                >
                  STAMP is a cutting-edge drone services company that offers a range of surveillance, security, and tracking solutions. The company prides itself on providing state-of-the-art technology and highly skilled personnel to ensure the safety and security of its clients.
<br/><br/>
One of the key services offered by STAMP is surveillance. The company uses advanced drone technology to provide 24/7 monitoring of any given area. This is especially useful for businesses and organizations that need to keep an eye on large premises, such as warehouses or construction sites. STAMP's surveillance drones are equipped with high-quality cameras that can capture clear, high-resolution footage day or night.
<br/><br/>
In addition to surveillance, STAMP also offers security services. The company's drones can be armed with a variety of tools and weapons, including stun guns, pepper spray, and even firearms. This makes them ideal for protecting high-value assets, such as VIPs or important buildings.
<br/><br/>
STAMP's tracking services are also highly sought after. The company uses advanced AI algorithms to track people and objects in real-time. This is especially useful for law enforcement agencies and private investigators who need to locate and monitor suspects.
<br/><br/>
Another key feature of STAMP's drone services is the user interface (UI). The UI is designed to be intuitive and easy to use, even for those with little or no drone experience. Users can access a range of features, including arming and disarming their drone, setting up custom flight paths, and adjusting camera settings.
<br/><br/>
Overall, STAMP is a forward-thinking drone services company that is revolutionizing the way we think about surveillance, security, and tracking. With its cutting-edge technology and highly skilled personnel, the company is well-positioned to become a leader in the industry.
                </chakra.p>
            </Stack>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

