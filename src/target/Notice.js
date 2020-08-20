import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const Notice = ({ modal, message }) => {
    const [show, setShow] = useState(false)
    
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    modal.handleClose = handleClose
    modal.handleShow = handleShow
    
    return (
        <div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="bg-info">
                    <Modal.Title>To Die, To Sleep</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                  <p className="text-danger" style={{fontSize: 23, textAlign:'center', marginBottom: 15}}>
                      {message}
                  </p>
                  <p style={{textAlign:'center', lineHeight: 2}}> [ Life is one kind of sound. Death is another kind of sound. 
                      Those who cannot hear the sound of death think death is silence. 
                      Death is not silence, it is just another kind of sound, 
                      but may not within the hearing range of a normal ear ]
                  </p> 
                  <Button variant="warning" 
                          onClick={handleClose}
                          style={{float: 'right'}}>
                     Close
                  </Button>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default Notice
