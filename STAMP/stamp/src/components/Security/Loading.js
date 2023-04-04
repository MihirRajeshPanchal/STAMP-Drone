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
} from '@chakra-ui/react'
import React from "react";
import "./Loading.css";
import TestRecord from "./TestRecord";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

const Loading = () => {
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
                                                navigate('/Security/TestRecord')
                                              }>
                                              Test
                                            </Button>
                                            <Routes>
                                              <Route path="/Security/TestRecord" element={<TestRecord />} /></Routes>
                        
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
