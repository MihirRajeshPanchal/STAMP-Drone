import React, { useRef, useEffect } from 'react';

const getCameraStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      return stream;
    } catch (err) {
      console.error(err);
    }
};
  
const GestureFeed = ({ enabled }) => {
    const videoRef = useRef();
  
    useEffect(() => {
      const initialize = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (stream) {
          videoRef.current.srcObject = stream;
        }
      };
      if (enabled) {
        initialize();
      }
    }, [enabled]);
  
    return (
      <div>
        <video ref={videoRef} autoPlay muted playsInline />
      </div>
    );
};
  
  export default GestureFeed;
  