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
import Section1 from '../components/Gallery/Section1';
// import Section2 from '../components/Gallery/Section2';
// import Section3 from '../components/Gallery/Section3';
// import Section4 from '../components/Gallery/Section4';
import bg1 from '../assets/bg1.png';

function Gallery() {
  return (
    <>
<Section1/>
    </>
  );
}

export default Gallery;
