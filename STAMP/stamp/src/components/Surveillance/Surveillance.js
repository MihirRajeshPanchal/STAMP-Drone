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
                                      <video controls style={{width: '100%'}}>
                                          <source src="https://www.youtube.com/watch?v=H5v3kku4y6Q" type="video"/>
                                      </video>
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
                                      <Input placeholder='Output Filename' width="500px"/>
                                      <Button
                                          style={{ margin: '0 10px' }}
                                          type="submit"
                                      // onClick={() =>
                                      //   navigate('/Security/Loading')
                                      // }
                                      >
                                          Upload
                                      </Button>
                                      <Button
                                          style={{ margin: '0 10px' }}
                                          type="submit"
                                      // onClick={() =>
                                      //   navigate('/Security/Loading')
                                      // }
                                      >
                                          Save to Disc
                                      </Button>
                                      <Button
                                          style={{ margin: '0 10px' }}
                                          type="submit"
                                      // onClick={() =>
                                      //   navigate('/Security/Loading')
                                      // }
                                      >
                                          Save to Cloud
                                      </Button>

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
