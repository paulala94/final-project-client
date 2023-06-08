import React from 'react'
import { Row, Button, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'


const CreateCardModal = ({ setCardData, closeModal }) => {

    const emptyForm = () => {
        setCardData({
            name: '',
            description: '',
            genre: '',
        })
        closeModal()
    }

    return (
        <div className="modalCreateCard">
            <p>¡Carta creada!</p>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button onClick={emptyForm} className='me-2 card-bt-delete'>
                        <Link to="/crear-cartas">Crea otra carta</Link>
                    </Button>

                    <Button className='ms-2 card-bt-delete'>
                        <Link to="/perfil">Vuelve a tu perfil</Link>
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default CreateCardModal