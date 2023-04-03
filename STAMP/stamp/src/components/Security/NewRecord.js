// // import NewRecord from '../../Face Recognition/trainer/02_face_training'
// import {
//     Button,
//   } from '@chakra-ui/react';
// const pythonExec =()=>{
//     const python_code =  `           
//     print('Hello')
//     `;
//     const pyodide = window.pyodide;
//     pyodide.runPython(python_code);
// }
// function App(){
//     return(
//         <div>
//             <Button onClick={pythonExec}>Click Me!</Button>
//         </div>
//     )
// }
// export default App;

// import React from 'react'
// import { Video } from 'react-video-stream'
// const url = 'http://example.com/manifest.mpd'
 
// const options = {
//   requestHeader: 'Authorization',
//   requestToken: 'access_token'
// }
// const App = () => {
//   return (
//     <div>
//       <Video
//         className='video-class'
//         controls={true}
//         autoPlay={true}
//         options={options}
//         remoteUrl={url}
//       />
//     </div>
//   )
// }
 
// export default App

import React from "react";
import Webcam from "react-webcam";
import "./NewRecord.css";
import Train from "./Train.js";
import {
    FormControl,
    Input,
    FormLabel,
    FormErrorMessage,
    HStack,
    Box,
    chakra,
    Checkbox,
    Radio,
    RadioGroup,
    Divider,
    Select,
    Heading,
    FormHelperText,
    Flex,
    GridItem,
    Stack,
    Text,
    SimpleGrid,
    Button,
  } from '@chakra-ui/react'
  import { BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
function App() {
    const navigate = useNavigate();
  return (
    <>
    <Box
  bg="#edf3f8"
  _dark={{
    bg: "#111",
  }}
  p={10}
>
<Flex justifyContent="center" alignItems="center">
  <Box w="80%">
    <SimpleGrid
      display={{
        base: "initial",
        md: "grid",
      }}
      columns={{
        md: 3,
      }}
      spacing={{
        md: 6,
      }}
    >
      <GridItem
        mt={[5, null, 0]}
        colSpan={{
          md: 2,
        }}
      >
        <chakra.form
          method="POST"
          shadow="base"
          rounded={[null, "md"]}
          overflow={{
            sm: "hidden",
          }}
        >
          <Stack
            px={4}
            py={5}
            p={[null, 6]}
            bg="white"
            _dark={{
              bg: "#141517",
            }}
            spacing={6}
          >
            <SimpleGrid columns={6} spacing={6}>
              <FormControl isRequired as={GridItem} colSpan={[6, 3]}>
                <FormLabel 
                  htmlFor="first_name"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  First name
                </FormLabel>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>

              <FormControl isRequired as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                  htmlFor="last_name"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  Last name
                </FormLabel>
                <Input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>

              <FormControl isRequired as={GridItem} colSpan={[6, 4]}>
                <FormLabel
                  htmlFor="email_address"
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  Email address
                </FormLabel>
                <Input
                  type="text"
                  name="email_address"
                  id="email_address"
                  autoComplete="email"
                  mt={1}
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                />
              </FormControl>

            </SimpleGrid>
          </Stack>
          <Box
            px={{
              base: 4,
              sm: 6,
            }}
            py={3}
            bg="gray.50"
            _dark={{
              bg: "#121212",
            }}
            textAlign="right"
          >
            <Button
              type="submit"
              onClick={() => 
                navigate('/Security/Train')
              }>
              Save
            </Button>
            <Routes>
          <Route path="/Security/Train" element={<Train/>} />
        
        </Routes>
          </Box>
        </chakra.form>
      </GridItem>
    </SimpleGrid>
  </Box></Flex>
</Box>

    </>
  );
}

export default App;