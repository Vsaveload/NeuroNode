import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Input,
} from 'reactstrap';
import SignUpPage from '../Signup/SignUpPage';
import LoginPage from '../Login/LoginPage';

function ModalPage({ modal, toggle, modalType }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{modalType === 'login' ? 'Login' : 'Register'}</ModalHeader>
        <ModalBody>
          {modalType === 'login' ? <LoginPage toggle={toggle} /> : <SignUpPage toggle={toggle} />}

        </ModalBody>
        <ModalFooter />
      </Modal>
    </div>
  );
}

export default ModalPage;
