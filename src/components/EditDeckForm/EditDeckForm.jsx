import deckService from '../../services/deckService'
import { Form, Button } from "react-bootstrap"
const { useNavigate, useParams } = require('react-router-dom')
const { useEffect, useState } = require('react')

const EditDeckForm = () => {

    const navigate = useNavigate()

    const { _id } = useParams()

    const [deckData, setDeckData] = useState({
        name: '',
        description: ''
    })

    useEffect(() => {
        getDeck()
    }, [_id])

    const getDeck = () => {

        deckService
            .getDeckInfo(_id)
            .then(({ data }) => setDeckData(data))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setDeckData({ ...deckData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        deckService
            .editDeck(_id, deckData)
            .then(() => navigate('/todos-los-mazos'))
            .catch(err => console.log(err))

    }
    const { name, description } = deckData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label >Nombre del mazo</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" className="inputHover" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label >Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" className="inputHover" />
            </Form.Group>

            <div className="d-grid">
            </div>
            <Button variant="dark" type="submit">Editar</Button>

        </Form>
    )
}


export default EditDeckForm