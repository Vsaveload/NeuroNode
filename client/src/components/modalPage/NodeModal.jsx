import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Input,
} from 'reactstrap';
import NodeEdit from './NodeEdit';

export default function NodeModal({
  modal, toggle, node, allProjectNodes,
}) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody style={{ backgroundColor: 'black' }}>
          <NodeEdit node={node} allProjectNodes={allProjectNodes} toggle={toggle} />
        </ModalBody>
      </Modal>
    </div>
  );
}
