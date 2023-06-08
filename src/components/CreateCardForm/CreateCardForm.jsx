import React, { useState } from 'react';
import cardService from '../../services/cardService';
import { Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import CreateCardModal from '../CreateCardModal/CreateCardModal';
import { CARD_GENRES_ARRAY } from '../../consts/card-consts';


const CreateCardForm = () => {
    // const navigate = useNavigate()
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
            .then(({ data }) => setShowModal(true))
            .catch((err) => console.log(err));
    };

    return (
        <div className="container">

            {/* TODO OPCIONAL: DINAMIZAR CREACIÓN PARALELA DE CARTAS */}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="text" placeholder='Nombre de la carta' value={cardData.name} onChange={handleInputChange} name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Control type="text" placeholder='Descripción de la carta' value={cardData.description} onChange={handleInputChange} name="description" />
                </Form.Group>

                <Form.Select className="mb-3" name="genre" defaultValue={"Elige un género"} onChange={handleInputChange}>
                    <option disabled>Elige un género</option>
                    {
                        CARD_GENRES_ARRAY.map(elm => <option key={elm}>{elm}</option>)
                    }
                </Form.Select>

                <div className="d-grid mt-3">
                    <Button className='edit-btn' type="submit">
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
                    <CreateCardModal closeModal={() => setShowModal(false)} setCardData={setCardData} />
                </Modal.Body>
            </Modal>
        </div>


    );
};

export default CreateCardForm;