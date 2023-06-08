import React from 'react'
import { Row, Col, Modal } from 'react-bootstrap'



const RoundModal = ({ winner }) => {
    return (
        <>
            <Modal.Header closeButton >
                <Modal.Title id="contained-modal-title-vcenter">¡SACABÓ!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modalCreateCard">
                    <Row>
                        <Col className='d-flex flex-column'>
                            <h3>EL GANADOR DE LA RONDA ES</h3>
                            <br />
                            <h4 style={{ color: '#F77E21' }}>¡EL EQUIPO {winner}!</h4>
                        </Col>
                    </Row>
                </div>
            </Modal.Body>
        </>
    )
}

export default RoundModal