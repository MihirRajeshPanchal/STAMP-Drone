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
} from '@chakra-ui/react'
import propellers from '../../assets/propellers.png';
import propellers_onclick from '../../assets/propellers_onclick.gif';
import M4 from '../../assets/M4.gif';
import M3 from '../../assets/M3.gif';
import M2 from '../../assets/M2.gif';
import M1 from '../../assets/M1.gif';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

const Propellers = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const toastIdRef = React.useRef();

    const [imageSrc, setImageSrc] = useState(propellers);

    const spinall = () => {
        setImageSrc(propellers_onclick);
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
        setImageSrc(M4);
        toastIdRef.current = toast({description: 'M1 propeller running'})
        fetch("http://localhost:5000/m1", {
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
    const third = () => {
        setImageSrc(M3);
        toastIdRef.current = toast({description: 'M4 propeller running'})
        fetch("http://localhost:5000/m4", {
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
    const second = () => {
        setImageSrc(M2);
        toastIdRef.current = toast({description: 'M2 propeller running'})
        fetch("http://localhost:5000/m2", {
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
    const first = () => {
        setImageSrc(M1);
        toastIdRef.current = toast({description: 'M3 propeller running'})
        fetch("http://localhost:5000/m3", {
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
                                    <Button
                                        type="submit"
                                        onClick={spinall}
                                    >
                                        SPIN ALL
                                    </Button>

                                </Box>
                            </GridItem>
                        </SimpleGrid>
                    </Box></Flex>
            </Box >

        </div >

    );
};

export default Propellers;
