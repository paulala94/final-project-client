import React from 'react'
import { Row, Button, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'


const CreateCardModal = ({setCardData}) => {

    const emptyForm = () => {
        setCardData({
            name: '',
            description: '',
            genre: '',
        })
    }

    return (
        <div className="modalCreateCard">
            <p>¡Carta creada!</p>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Button variant="outline-success" onClick={emptyForm} className='me-2'>
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