import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalPage = () => {
    const [showModal, setShowModal] = useState(true);

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div>
            {showModal && (
                <div
                    className="modal show"
                    style={{ display: 'block', position: 'initial' }}
                >
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Modal body text goes here.</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            )}
        </div>
    );
};

export default ModalPage;
