import React from 'react';
import {
  Image,
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Stack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';
import Section1 from '../components/Homepage/Section1';
import Section2 from '../components/Homepage/Section2';
import Section3 from '../components/Homepage/Section3';
import Section4 from '../components/Homepage/Section4';
import bg1 from '../assets/bg1.png';

function App() {
  return (
 <>
  <Section1></Section1>
 <Section2></Section2> 
 {/* <Section3></Section3> */}
 <Section4></Section4>
 </>

 

  


    // <ChakraProvider theme={theme}>
/* <Stack>
  <Box>
  <Image src={bg1} alt='Background 1' height={600} width={1300}/>
  </Box>
    <Box>
      <Text>HELLO</Text>
    </Box>
</Stack> */
      /* <Image src={bg1} alt='Background 1' height={600} width={1300}/>
      <CTA></CTA> */
    /* </ChakraProvider> */
  );
}

export default App;
