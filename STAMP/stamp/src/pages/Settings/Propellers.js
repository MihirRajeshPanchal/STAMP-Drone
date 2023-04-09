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

    const [imageSrc, setImageSrc] = useState(propellers);

    const spinall = () => {
        setImageSrc(propellers_onclick);
    };

    const fourth = () => {
        setImageSrc(M4);
    };
    const third = () => {
        setImageSrc(M3);
    };
    const second = () => {
        setImageSrc(M2);
    };
    const first = () => {
        setImageSrc(M1);
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
                                        onClick={fourth} style={{ position: 'absolute', top: '20%', left: '28%', borderRadius: '50%', border: '2px solid black', width: '50px', height: '50px', backgroundColor: '#4299e1' }}>M4</button>
                                    <button type="submit"
                                        onClick={second} style={{ position: 'absolute', top: '20%', right: '28%', borderRadius: '50%', border: '2px solid black', width: '50px', height: '50px', backgroundColor: '#4299e1' }}>M2</button>
                                    <button type="submit"
                                        onClick={third} style={{ position: 'absolute', bottom: '20%', left: '28%', borderRadius: '50%', border: '2px solid black', width: '50px', height: '50px', backgroundColor: '#4299e1' }}>M3</button>
                                    <button type="submit"
                                        onClick={first} style={{ position: 'absolute', bottom: '20%', right: '28%', borderRadius: '50%', border: '2px solid black', width: '50px', height: '50px', backgroundColor: '#4299e1' }}>M1</button>
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