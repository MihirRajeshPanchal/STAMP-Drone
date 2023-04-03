import React, { useRef, useEffect } from 'react';

const CameraButton = ({ enabled, onClick }) => {
    return (
      <button onClick={onClick}>
        {enabled ? '' : ''}
      </button>
    );
};  

export default CameraButton;