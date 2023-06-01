import React, { useState } from 'react';
import cardService from '../../services/cardService';
import { Form, Button } from 'react-bootstrap';

const CreateCardForm = () => {
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
            .then(() => alert('done'))
            .catch((err) => console.log(err));
    };

    return (
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
    );
};

export default CreateCardForm;