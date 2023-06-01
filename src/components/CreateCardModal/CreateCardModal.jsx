import React from 'react'
import { Row, Button, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'


const CreateCardModal = () => {
    return (
        <div className="modalCreateCard">
            <p>Carta creada!</p>
            <Row>
                <Col className='d-flex justify-content-center'>
                    {/* como podriamos hacer que se si le das a crear carta se vaciaran los campos¿ */}
                    <Button variant="outline-success" className='me-2'>
                        <Link to="/crear-cartas">Crea otra carta</Link>
                    </Button>
                    <Button variant="outline-danger" className='ms-2'>
                        <Link to="/perfil">Vuelve a tu perfil</Link>
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default CreateCardModal