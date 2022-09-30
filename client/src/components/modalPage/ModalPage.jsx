import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Input,
} from 'reactstrap';

function ModalPage({ modal, toggle }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Авторизация</ModalHeader>
        <ModalBody>
          <Input
            type="email"
            placeholder="Введите Email"
            rows={1}
            name="email"
          />
          <Input
            type="password"
            placeholder="Введите пароль"
            rows={1}
            name="password"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Авторизироваться
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalPage;
