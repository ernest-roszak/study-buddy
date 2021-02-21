import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/deleteIcon.svg';
import { StyledButton } from './Button.styles';

const Button = () => {
  return (
    <StyledButton>
      {/* <img src={deleteIcon} alt="" /> */}
      <DeleteIcon />
    </StyledButton>
  );
};

export default Button;
