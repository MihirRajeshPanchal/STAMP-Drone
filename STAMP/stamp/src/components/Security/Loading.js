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
    Progress,
    useToast,
} from '@chakra-ui/react'
import React, { useEffect } from "react";
import "./Loading.css";
import Detect from "./Detect";
import { BrowserRouter, Route, Routes, useNavigate,  } from "react-router-dom";

const Loading = () => {
    const navigate = useNavigate();
    const toast = useToast();

    useEffect(() => {
        fetch("http://127.0.0.1:5000/train", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              }
          })
          .then(response => {
            if (response.ok) {
              console.log("trained");
              toast({
                  title: `Trained successfully`,
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
                window.location.assign('http://localhost:3000/Security/Detect');
            } else {
                console.log("Error while sending details");
            }
        })
        .catch(error => {
            console.log(error);
        });
      }, []);

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

                                    <div className="progress">
                                        <h1>Training Model</h1>
                                        <Progress size="xs" isIndeterminate />
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
                                                navigate('/Security/Detect')
                                              }>
                                              Test
                                            </Button>
                                            <Routes>
                                              <Route path="/Security/Detect" element={<Detect />} /></Routes>
                        
                                    </Box>
                                </chakra.form>
                            </GridItem>
                        </SimpleGrid>
                    </Box></Flex>
            </Box>

        </div>

    );
};

export default Loading;
