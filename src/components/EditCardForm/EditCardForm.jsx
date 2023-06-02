import cardService from "../../services/cardService"
import { Form, Button } from 'react-bootstrap';
const { useNavigate, useParams } = require("react-router-dom")
const { useEffect, useState } = require("react")



const EditCardForm = () => {

    const navigate = useNavigate()

    const { _id } = useParams()

    const [ cardData, setCardData ] = useState({
        name: '',
        genre: '',
        description: ''
    })

    useEffect(() => {
        getCard()
    }, [_id])
    
    const getCard = () => {

        cardService
            .getCardInfo(_id)
            .then(({data}) => setCardData(data))
            .catch(err => console.log(err))
    }


    const handleSubmit = e => {

        e.preventDefault()

        cardService
            .editCard(_id, cardData)
            .then(() => navigate('/todas-las-cartas'))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setCardData({ ...cardData, [name]: value })
        console.log(cardData)
    }

    const { name, genre, description, owner } = cardData

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                {/* <Form.Label>Nombre</Form.Label> */}
                <Form.Control type="text" placeholder='Nombre de la carta' value={name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                {/* <Form.Label>Descripción</Form.Label> */}
                <Form.Control type="text" placeholder='Descripción de la carta' value={description} onChange={handleInputChange} name="description" />
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
                    Editar carta
                </Button>
            </div>
        </Form>
    )
}

export default EditCardForm