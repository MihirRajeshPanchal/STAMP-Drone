import {
    CardBody,
    useToast,
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
import React, { useState, } from "react";
import Loading from "./Loading.js";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import video from '../../../../../1.mp4';
import video from './1.mp4';


const Train = () => {
    const navigate = useNavigate();
    const toast = useToast();

    const [selectedFile, setSelectedFile] = useState(null);
    const [filename, setFilename] = useState("");
    const [outpuFilename, setOutputFilename] = useState("");

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

  const uploadFile = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append("file", selectedFile);
            
            fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData
            })
            .then(response => {
                if (response.ok) {
                console.log("File uploaded successfully");
                toast({
                    title: `File "${filename}" uploaded successfully`,
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                  setFilename("");

                //   run code for detection
                fetch("http://127.0.0.1:5000/detect", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                .then(response => {
                    if (response.ok) {
                      console.log("Detected");
                      toast({
                          title: `Detected successfully`,
                          status: "success",
                          duration: 3000,
                          isClosable: true,
                        });
                        window.location.assign('http://localhost:3000/Security/Detect');
                    } else {
                        console.log("Error while Detecting");
                    }
                })
                .catch(error => {
                    console.log(error);
                });



                } else {
                console.log("Error uploading file");
                }
            })
            .catch(error => {
                console.log(error);
            });
        }
        else {
            toast({
                title: "Please select a video file",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    }


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
                                            <source src={video} type="video/mp4"/>
                                        </video>
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
                                        <Input value={outpuFilename}  style={{ margin: '0 10px' }} onChange={(e) => setOutputFilename(e.target.value)} placeholder='Output Filename' width="430px"/>

                                        
                                            <input
                                            type="file"
                                            onChange={handleFileInput}
                                            style={{ display: "none" }}
                                            />
                                            <Button
                                                 style={{ margin: '0 10px' }}
                                           
                                            onClick={() =>
                                                document.querySelector("input[type='file']").click()
                                            }
                                            >
                                            Upload File
                                            </Button>
                                       
                                        
                                        <Button
                                        onClick={uploadFile} disabled={!selectedFile} mt={2}
                                            style={{ margin: '0 10px' }}
                                          
                                        // onClick={() =>
                                        //   navigate('/Security/Loading')
                                        // }
                                        >
                                            Submit
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
                                        {filename && <Text mt={2}>Selected file: {filename}</Text>}
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
