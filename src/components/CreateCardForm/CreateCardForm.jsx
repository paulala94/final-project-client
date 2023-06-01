import React, { useState } from 'react';
import cardService from '../../services/cardService';
import { Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import CreateCardModal from '../CreateCardModal/CreateCardModal';


const CreateCardForm = () => {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    const [cardData, setCardData] = useState({
        name: '',
        description: '',
        genre: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardData({ ...cardData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        cardService
            .create(cardData)
            //cambiar lo de done por otra cosa, un modal con un boton que diga: añadir otra?
            .then(({ data }) => setShowModal(true))
            .catch((err) => console.log(err));
    };

    return (
        <div className="container">

            {/* TODO OPCIONAL: DINAMIZAR CREACIÓN PARALELA DE CARTAS */}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    {/* <Form.Label>Nombre</Form.Label> */}
                    <Form.Control type="text" placeholder='Nombre de la carta' value={cardData.name} onChange={handleInputChange} name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    {/* <Form.Label>Descripción</Form.Label> */}
                    <Form.Control type="text" placeholder='Descripción de la carta' value={cardData.description} onChange={handleInputChange} name="description" />
                </Form.Group>

                <Form.Select className="mb-3" name="genre" defaultValue={"Elige un género"} onChange={handleInputChange}>
                    {/* TODO OPCIONAL: CREAR COLECCION GENRES EN BACKEND */}
                    <option disabled>Elige un género</option>
                    <option value="Cine">Cine</option>
                    <option value="TV">TV</option>
                    <option value="Historia">Historia</option>
                    <option value="Música">Música</option>
                    <option value="Literatura">Literatura</option>
                    <option value="Política">Política</option>
                    <option value="Otros">Otros</option>
                </Form.Select>

                <div className="d-grid mt-3">
                    <Button variant="dark" type="submit">
                        Crear carta
                    </Button>
                </div>
            </Form>


            <Modal show={showModal} onHide={() => setShowModal(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='text-center' >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">¡Carta creada!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateCardModal closeModal={() => setShowModal(false)} />
                </Modal.Body>
            </Modal>
        </div>


    );
};

export default CreateCardForm;