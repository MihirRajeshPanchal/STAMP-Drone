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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';

import CTA from '../components/CTA';
import bg1 from '../assets/bg1.png';

function App() {
  return (
    <ChakraProvider theme={theme}>

      <Image src={bg1} alt='Background 1' height={600} width={1300}/>
      <CTA></CTA>
    </ChakraProvider>
  );
}

export default App;
