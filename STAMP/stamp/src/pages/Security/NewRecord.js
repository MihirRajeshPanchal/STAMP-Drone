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
  Flex,
} from '@chakra-ui/react';

import NewRecord from '../../components/Security/NewRecord';
import Section1 from '../../components/Homepage/Section1';

function App() {
  return (
 <>

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

          <NewRecord></NewRecord>

</Flex>

 
 </>
  );
}

export default App;
