import React, { useState } from "react"
import deckService from '../../services/deckService'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"



const CreateDeckForm = () => {

    const [deckData, setDeckData] = useState({
        name: '',
        description: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setDeckData({ ...deckData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        deckService
            .create(deckData)
            .then(({ data }) => alert('done'))
            .catch((err) => console.log(err));

    }
    return (
        <div className="container">

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="text" placeholder='Nombre del mazo' value={deckData.name} onChange={handleInputChange} name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Control type="text" placeholder='Descripción del mazo' value={deckData.description} onChange={handleInputChange} name="description" />
                </Form.Group>

                <div className="d-grid mt-3">
                    <Button variant="dark" type="submit">
                        Crear mazo
                    </Button>
                </div>
            </Form>



        </div>
    )
}

export default CreateDeckForm