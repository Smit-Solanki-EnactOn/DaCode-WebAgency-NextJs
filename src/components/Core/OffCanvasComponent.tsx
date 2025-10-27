import React from 'react'
import { Offcanvas } from 'react-bootstrap'

interface OffCanvasProps {
    showModal: boolean;
    handleClose: () => void;
    placement?: 'start' | 'end' | 'top' | 'bottom';
}

const OffCanvasComponent = ({showModal, handleClose, placement}: OffCanvasProps) => {
  return (
    <Offcanvas show={showModal} onHide={handleClose}  placement={placement || 'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In a real application it should be possible to add more information here.
        </Offcanvas.Body>
      </Offcanvas>
  )
}

export default OffCanvasComponent