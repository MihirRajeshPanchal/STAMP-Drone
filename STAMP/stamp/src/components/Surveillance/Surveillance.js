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
  useToast,
} from '@chakra-ui/react'
import React from "react";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from 'react'
import video from './yolo.mp4';


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
        
        fetch("http://localhost:5000/yoloupload", {
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

            //   run code for YOLO detection
            fetch("http://127.0.0.1:5000/yolo", {
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
                    window.location.assign('http://localhost:3000/Surveillance');
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

const saveToDisc = () => {
    if(outpuFilename === '') {
        toast({
            title: "Please enter an output file Name",
            status: "warning",
            duration: 2000,
            isClosable: true,
        });
    }
    else {
        fetch('http://localhost:5000/save_yolo_to_disc')
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.blob();
          })
          .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${outpuFilename}.mp4`);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
          })
          .catch(error => {
            console.error('Error downloading file:', error);
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
                                      <Input value={outpuFilename} onChange={(e) => setOutputFilename(e.target.value)} placeholder='Output Filename' width="500px"/>

                                                                                
                                        <input
                                        type="file"
                                        onChange={handleFileInput}
                                        style={{ display: "none" }}
                                        />
                                        <Button
                                        onClick={() =>
                                            document.querySelector("input[type='file']").click()
                                        }
                                        >
                                        Upload File
                                        </Button>
                                        {filename && <Text mt={2}>Selected file: {filename}</Text>}

                                        <Button onClick={uploadFile} disabled={!selectedFile} mt={2}>
                                        Submit
                                        </Button>


                                      <Button
                                          style={{ margin: '0 10px' }}
                                          onClick={saveToDisc}
                                      >
                                          Save to Disc
                                      </Button>
                                      <Button
                                          style={{ margin: '0 10px' }}
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
