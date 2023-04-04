import CameraFeed from "./CameraFeed";
import CameraButton from "./CameraButton";
import { useState } from "react";

import {
    Flex,
    Button,
    Text,
  } from '@chakra-ui/react';

const CameraViewing = () => {

    const [enabled, setEnabled] = useState(false);

    const handleToggleCamera = () => {
        setEnabled(!enabled);
    };

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

            <Text fontSize='3xl'>Camera Feed</Text>

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

            <CameraButton enabled={enabled} onClick={handleToggleCamera} />
            {enabled && <CameraFeed enabled={enabled} />}
        
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

            <Button colorScheme='teal' variant='solid' onClick={handleToggleCamera}>
                {enabled ? 'Disable Camera' : 'Enable Camera'}
            </Button>

        </Flex>


      </div>
      
    );
  };
  
  export default CameraViewing;
  