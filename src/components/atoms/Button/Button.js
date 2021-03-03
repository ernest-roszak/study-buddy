import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/deleteIcon.svg';
import { StyledButton } from './Button.styles';

const Button = (props) => {
  return (
    <StyledButton {...props}>
      {/* <img src={deleteIcon} alt="" /> */}
      <DeleteIcon />
    </StyledButton>
  );
};

export default Button;
