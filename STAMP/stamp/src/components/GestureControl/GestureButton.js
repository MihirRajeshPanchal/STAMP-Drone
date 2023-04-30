import React, { useRef, useEffect } from 'react';

const GestureButton = ({ enabled, onClick }) => {
    return (
      <button onClick={onClick}>
        {enabled ? '' : ''}
      </button>
    );
};  

export default GestureButton;