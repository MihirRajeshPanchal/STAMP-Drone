import React, { useState } from 'react';
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
  useToast,
  SimpleGrid,
} from '@chakra-ui/react';
import propellers from "../../assets/propellers.png"
import forwardimg from "../../assets/forward.png"
import backwardimg from "../../assets/backward.png"
import leftimg from "../../assets/left.png"
import rightimg from "../../assets/right.png"

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

const Directions = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const toastIdRef = React.useRef();

  const [imageSrc, setImageSrc] = useState(propellers);

  const left = () => {
    setImageSrc(leftimg);
    toastIdRef.current = toast({description: 'Drone Moving left'})
    fetch("http://localhost:5000/left", {
        method: "POST",
    })
    .then(() => {
        setTimeout(() => {
            setImageSrc(propellers);
        }, 1000); // wait for 5 seconds
    })
    .catch((error) => {
        console.error(error);
        toast({ description: "Error spinning propellers", status: "error" });
    });
  };
  const backward = () => {
    setImageSrc(backwardimg);
    toastIdRef.current = toast({description: 'Drone Moving Backward'})
    fetch("http://localhost:5000/backward", {
        method: "POST",
    })
    .then(() => {
        setTimeout(() => {
            setImageSrc(propellers);
        }, 1000); // wait for 5 seconds
    })
    .catch((error) => {
        console.error(error);
        toast({ description: "Error spinning propellers", status: "error" });
    });
  };
  const right = () => {
    setImageSrc(rightimg);
    toastIdRef.current = toast({description: 'Drone Moving Right'})
    fetch("http://localhost:5000/right", {
        method: "POST",
    })
    .then(() => {
        setTimeout(() => {
            setImageSrc(propellers);
        }, 1000); // wait for 5 seconds
    })
    .catch((error) => {
        console.error(error);
        toast({ description: "Error spinning propellers", status: "error" });
    });
  };
  const forward = () => {
    setImageSrc(forwardimg);
    toastIdRef.current = toast({description: 'Drone Moving Forward'})
    fetch("http://localhost:5000/forward", {
        method: "POST",
    })
    .then(() => {
        setTimeout(() => {
            setImageSrc(propellers);
        }, 1000); // wait for 5 seconds
    })
    .catch((error) => {
        console.error(error);
        toast({ description: "Error spinning propellers", status: "error" });
    });
  };

  return (
    <div>
      <Box
        bg="white"
        _dark={{
          bg: '#111',
        }}
        p={10}
      >
        <Flex justifyContent="center" alignItems="center">
          <Box
            w="80%"
            shadow="base"
            rounded={[null, 'md']}
            overflow={{
              sm: 'hidden',
            }}
          >
            <SimpleGrid
              display={{
                base: 'initial',
                md: 'grid',
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
                <div style={{ position: 'relative', height: '80vh' }}>
                  <button
                    type="submit"
                    onClick={left}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '25%',
                      transform: 'translateY(-50%)',
                      borderRadius: '50%',
                      border: '2px solid black',
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#4299e1',
                    }}
                  >
                    ◄
                  </button>
                  <button
                    type="submit"
                    onClick={right}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '25%',
                      transform: 'translateY(-50%)',
                      borderRadius: '50%',
                      border: '2px solid black',
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#4299e1',
                    }}
                  >
                    ►{' '}
                  </button>
                  <button
                    type="submit"
                    onClick={backward}
                    style={{
                      position: 'absolute',
                      bottom: '0%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderRadius: '50%',
                      border: '2px solid black',
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#4299e1',
                    }}
                  >
                    ▼
                  </button>
                  <button
                    type="submit"
                    onClick={forward}
                    style={{
                      position: 'absolute',
                      top: '0%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderRadius: '50%',
                      border: '2px solid black',
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#4299e1',
                    }}
                  >
                    ▲
                  </button>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                    }}
                  >
                    <img
                      style={{ maxWidth: '50%', maxHeight: '80%' }}
                      src={imageSrc}
                      alt="Propellers"
                    />
                  </div>
                </div>

                {/* <div style={{ position: 'relative', height: '50vh' }}>
                                    <button type="submit"
                                        //onClick={fourth} 
                                        style={{ position: 'absolute', top: '0%', left: '28%', borderRadius: '50%', border: '2px solid black', width: '50px', height: '50px', backgroundColor: '#4299e1' }}>M4</button>
                                    <button type="submit"
                                        //onClick={second} 
                                        style={{ position: 'absolute', top: '0%', right: '28%', borderRadius: '50%', border: '2px solid black', width: '50px', height: '50px', backgroundColor: '#4299e1' }}>M2</button>
                                    <button type="submit"
                                        //onClick={third} 
                                        style={{ position: 'absolute', bottom: '20%', left: '28%', borderRadius: '50%', border: '2px solid black', width: '50px', height: '50px', backgroundColor: '#4299e1' }}>M3</button>
                                    <button type="submit"
                                        //onClick={first} 
                                        style={{ position: 'absolute', bottom: '20%', right: '28%', borderRadius: '50%', border: '2px solid black', width: '50px', height: '50px', backgroundColor: '#4299e1' }}>M1</button>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                        <img style={{ maxWidth: '30%', maxHeight: '100%' }} src={directions} alt="Propellers" />
                                    </div>

                                </div> */}

                <Box
                  px={{
                    base: 4,
                    sm: 6,
                  }}
                  py={3}
                  bg="gray.50"
                  _dark={{
                    bg: '#121212',
                  }}
                  textAlign="right"
                >
                </Box>
              </GridItem>
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Directions;
