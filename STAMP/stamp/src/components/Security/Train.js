<<<<<<< HEAD
import {
  CardBody,
  Image,
  Card,
  CardFooter,
  Button,
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
} from '@chakra-ui/react'
import React from "react";
import Loading from "./Loading.js";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

const Train = () => {
  const navigate = useNavigate();
  return (
    <div>
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
                md: 1,
              }}
              spacing={{
                md: 6,
              }}
=======
  import {
    CardBody,
    Image,
    Card,
    CardFooter,
    Button,
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
  } from '@chakra-ui/react'
  import React from "react";
  // import Webcam from "react-webcam";
  const Train = () => {
    return (
      <div>
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
    <div>
      {/* <Webcam /> */}
    </div>
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
>>>>>>> 1cf374cca52ef2201dbe55f391bd94cccaf1487f
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
                  <div>
                    <h1>Camera Model Here</h1>
                    {/* <Webcam /> */}
                  </div>
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
                        navigate('/Security/Loading')
                      }>
                      Train
                    </Button>
                    <Routes>
                      <Route path="/Security/Loading" element={<Loading />} /></Routes>

                  </Box>
                </chakra.form>
              </GridItem>
            </SimpleGrid>
          </Box></Flex>
      </Box>

    </div>

  );
};

export default Train;
