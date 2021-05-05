import { Button } from 'components/atoms/Button/Button';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ModalWrapper } from './Modal.styles';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, children }) => {
  const modalElement = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalElement);
    return () => {
      modalContainer.removeChild(modalElement);
    };
  }, [modalElement]);

  return ReactDOM.createPortal(
    <ModalWrapper>
      {children}
      <Button onClick={handleClose}>Close modal</Button>
    </ModalWrapper>,
    modalElement
  );
};

export default Modal;
