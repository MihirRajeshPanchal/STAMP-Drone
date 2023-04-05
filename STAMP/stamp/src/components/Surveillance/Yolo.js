import React, { useState, useEffect } from 'react';

function Yolo() {
  const [imageSrc, setImageSrc] = useState('http://localhost:5000/yolo');
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageSrc(`${imageSrc}?t=${Date.now()}`);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imageSrc]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={imageSrc} alt="Video feed" />
      
    </div>
  );
}

export const yolo = "Yes";
export default Yolo;




