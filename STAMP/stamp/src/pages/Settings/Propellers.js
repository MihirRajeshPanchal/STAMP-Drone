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
    SimpleGrid,
    useToast,
    useColorMode
} from '@chakra-ui/react'
import propellers from '../../assets/propellers.png';
import propellers_white from '../../assets/propellers_white.png';
import propellers_onclick from '../../assets/propellers_onclick.gif';
import propellers_onclick_white from '../../assets/propellers_onclick_white.gif';
import M4 from '../../assets/M4.gif';
import M3 from '../../assets/M3.gif';
import M2 from '../../assets/M2.gif';
import M2_white from '../../assets/M2_white.gif';
import M1_white from '../../assets/M1_white.gif';
import M3_white from '../../assets/M3_white.gif';
import M4_white from '../../assets/M4_white.gif';
import M1 from '../../assets/M1.gif';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

const Propellers = () => {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();
    const toast = useToast();
    const toastIdRef = React.useRef();

    const [imageSrc, setImageSrc] = useState(propellers);

    const spinall = () => {
        if(colorMode==='light'){
            setImageSrc(propellers_onclick);
        }
        else{
            setImageSrc(propellers_onclick_white);
        }
        toastIdRef.current = toast({description: 'All Propellers running'});
        fetch("http://localhost:5000/spinall", {
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

    const fourth = () => {
        if(colorMode==='light'){
            setImageSrc(M4);
        }
        else{
            setImageSrc(M4_white)
        }
        toastIdRef.current = toast({description: 'M1 propeller running'})
        fetch("http://localhost:5000/m1", {
            method: "POST",
        })
        .then(() => {
            setTimeout(() => {
                if(colorMode==='light'){
                    setImageSrc(propellers);
                }
                else{
                    setImageSrc(propellers_white)
                }
            }, 1000); // wait for 5 seconds
        })
        .catch((error) => {
            console.error(error);
            toast({ description: "Error spinning propellers", status: "error" });
        });
    };
    const third = () => {
        if(colorMode==='light'){
            setImageSrc(M3);
        }
        else{
            setImageSrc(M3_white)
        }
        toastIdRef.current = toast({description: 'M4 propeller running'})
        fetch("http://localhost:5000/m4", {
            method: "POST",
        })
        .then(() => {
            setTimeout(() => {
                if(colorMode==='light'){
                    setImageSrc(propellers);
                }
                else{
                    setImageSrc(propellers_white)
                }
            }, 1000); // wait for 5 seconds
        })
        .catch((error) => {
            console.error(error);
            toast({ description: "Error spinning propellers", status: "error" });
        });
    };
    const second = () => {
        if(colorMode==='light'){
            setImageSrc(M2);
        }
        else{
            setImageSrc(M2_white)
        }
        toastIdRef.current = toast({description: 'M2 propeller running'})
        fetch("http://localhost:5000/m2", {
            method: "POST",
        })
        .then(() => {
            setTimeout(() => {
                if(colorMode==='light'){
                    setImageSrc(propellers);
                }
                else{
                    setImageSrc(propellers_white)
                }
            }, 1000); // wait for 5 seconds
        })
        .catch((error) => {
            console.error(error);
            toast({ description: "Error spinning propellers", status: "error" });
        });
    };
    const first = () => {
        if(colorMode==='light'){
            setImageSrc(M1);
        }
        else{
            setImageSrc(M1_white)
        }
        toastIdRef.current = toast({description: 'M3 propeller running'})
        fetch("http://localhost:5000/m3", {
            method: "POST",
        })
        .then(() => {
            setTimeout(() => {
                if(colorMode==='light'){
                    setImageSrc(propellers);
                }
                else{
                    setImageSrc(propellers_white)
                }
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
                    bg: "#111",
                }}
                p={10}
            >
                <Flex justifyContent="center" alignItems="center">
                    <Box w="80%" shadow="base"
                        rounded={[null, "md"]}
                        overflow={{
                            sm: "hidden",
                        }}>
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
                                <div style={{ position: 'relative', height: '50vh' }}>
                                    <button type="submit"
                                        onClick={fourth} style={{ position: 'absolute', top: '20%', left: '28%', borderRadius: '50%', border: '2px solid black', width: '50px', height: '50px', backgroundColor: '#4299e1' }}>M1</button>
                                    <button type="submit"
                                        onClick={second} style={{ position: 'absolute', top: '20%', right: '28%', borderRadius: '50%', border: '2px solid black', width: '50px', height: '50px', backgroundColor: '#4299e1' }}>M2</button>
                                    <button type="submit"
                                        onClick={third} style={{ position: 'absolute', bottom: '20%', left: '28%', borderRadius: '50%', border: '2px solid black', width: '50px', height: '50px', backgroundColor: '#4299e1' }}>M4</button>
                                    <button type="submit"
                                        onClick={first} style={{ position: 'absolute', bottom: '20%', right: '28%', borderRadius: '50%', border: '2px solid black', width: '50px', height: '50px', backgroundColor: '#4299e1' }}>M3</button>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                        <img style={{ maxWidth: '30%', maxHeight: '100%' }} src={imageSrc} alt="Propellers" />
                                    </div>

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
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
                                <Button
                                        type="submit"
                                        onClick={spinall}
                                    >
                                        SPIN ALL
                                    </Button>
                                </div>
                                    

                                </Box>
                            </GridItem>
                        </SimpleGrid>
                    </Box></Flex>
            </Box >

        </div >

    );
};

export default Propellers;
