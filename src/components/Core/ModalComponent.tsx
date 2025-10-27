import React from 'react'
import { Modal } from 'react-bootstrap'
import ButtonComponent from './ButtonComponent'

interface ModalProps {
    showModal: boolean;
    handleClose: () => void;
    isStatic?: boolean;
}

const ModalComponent = ({showModal, handleClose, isStatic}: ModalProps) => {
  return (
    <Modal show={showModal} onHide={handleClose} backdrop={isStatic ? 'static' : true} keyboard={!isStatic}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <ButtonComponent
            label="Close"
            role="button"
            variant="outline"
            onClick={handleClose}
          />
          <ButtonComponent
            label="Save Changes"
            role="button"
            variant="primary"
            onClick={handleClose}
          />
        </Modal.Footer>
      </Modal>
  )
}

export default ModalComponent