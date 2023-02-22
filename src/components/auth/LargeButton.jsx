import React from 'react';

const LargeButton = ({ color, children, onClick, mode, disabled }) => {
  return (
    <button color={color} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default LargeButton;
