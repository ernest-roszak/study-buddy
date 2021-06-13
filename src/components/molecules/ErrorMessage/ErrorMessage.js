import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './ErrorMessage.styles';
import { Title } from 'components/atoms/Title/Title';

const defaultMessageError = 'Something went wrong. Please try again, or contact our support.';

const ErrorMessage = ({ message = defaultMessageError }) => {
  return (
    <Wrapper>
      <Title>Oops!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
