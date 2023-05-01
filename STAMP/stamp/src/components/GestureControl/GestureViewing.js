import GestureFeed from "./GestureFeed";
import GestureButton from "./GestureButton";
import { useState } from "react";

import {
    Flex,
    Button,
    Text,
    useToast
  } from '@chakra-ui/react';

const GestureViewing = () => {

    const [enabled, setEnabled] = useState(false);
    const toast = useToast();
    // const handleToggleCamera = () => {
    //     setEnabled(!enabled);
    // };

    const detect = () =>{
        setEnabled(true);
        fetch("http://localhost:5000/hand_gesture", {
                method: "GET",
        })
        .then(() => {
            setTimeout(() => {
            }, 1000);
        })
        .catch((error) => {
            console.error(error);
            toast({ description: "Error spinning propellers", status: "error" });
        });
    }

    return (
      <div>

        <Flex
        bg="#edf3f8"
        _dark={{
            bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        >

            <Text fontSize='3xl'>Hand Gesture Control</Text>

        </Flex>


        <Flex
        bg="#edf3f8"
        _dark={{
            bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        >
            {/* {enabled && <CameraFeed enabled={enabled} />} */}
        
        </Flex>


        <Flex
        bg="#edf3f8"
        _dark={{
            bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        >

            <Button colorScheme='teal' variant='solid' onClick={detect}>
                Enable Gesture Control
            </Button>

        </Flex>


      </div>
      
    );
  };
  
  export default GestureViewing;
  