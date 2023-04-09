import React from "react";
import "./NewRecord.css";
import Loading from "./Loading.js";
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  HStack,
  useToast,
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
import { BrowserRouter, Route, Routes, useNavigate,  } from "react-router-dom";
import { useState } from 'react'
function NewRecord() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

    const handleSubmit = () => {

        // if(firstName && lastName && email) {
            fetch("http://127.0.0.1:5000/newrecord", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                firstName,
                lastName,
                email
              })
          })
          .then(response => {
              if (response.ok) {
                console.log("details sent");
                toast({
                    title: `details sent successfully`,
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                  window.location.assign('http://localhost:3000/Security/Loading');
                  // navigate('/Security/Loading');
                  // navigate(-1);
                  // setShowLoading(true);
                  // window.location.assign('http://localhost:3000/Security/Detect');
              } else {
              console.log("Error while sending details");
              }
          })
          .catch(error => {
              console.log(error);
          });
        // }
        // else {
        //   toast({
        //     title: `Please enter all fields`,
        //     status: "error",
        //     duration: 3000,
        //     isClosable: true,
        //   });
        // }
    }

  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <SimpleGrid
          display={{
            base: "initial",
            md: "grid",
          }}
          columns={{
            md: 2,
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
              width="100%"
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  onClick={ 
                    handleSubmit 
                    // navigate('/Security/Loading') 
                  }>
                  Save 
                </Button>
                {/* <Routes>
                  <Route path="/Security/Loading" element={<Loading />} /></Routes> */}
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default NewRecord;