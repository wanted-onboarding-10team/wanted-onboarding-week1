import React from 'react';
import { StyledButton } from './../../styles/todoStyle';

const LargeButton = ({ color, children, onClick, mode, disabled }) => {
  return (
    <StyledButton color={color} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default LargeButton;
