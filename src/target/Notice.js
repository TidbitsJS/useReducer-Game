import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const Notice = ({ modal }) => {
    const [show, setShow] = useState(false)
    
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    modal.handleClose = handleClose
    modal.handleShow = handleShow
    
    return (
        <div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, You are reading this in a Modal</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Notice
