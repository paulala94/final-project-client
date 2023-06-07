import cardService from "../../services/cardService"
import { Form, Button } from 'react-bootstrap';
import { CARD_GENRES_ARRAY } from '../../consts/card-consts';
const { useNavigate, useParams } = require("react-router-dom")
const { useEffect, useState } = require("react")


const EditCardForm = () => {

    const navigate = useNavigate()

    const { _id } = useParams()

    const [cardData, setCardData] = useState({
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
            .then(({ data }) => setCardData(data))
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
    }

    const { name, description } = cardData

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Control type="text" placeholder='Nombre de la carta' value={name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Control type="text" placeholder='Descripción de la carta' value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Select className="mb-3" name="genre" defaultValue={"Elige un género"} onChange={handleInputChange}>
                {/* TODO OPCIONAL: CREAR COLECCION GENRES EN BACKEND */}
                <option disabled>Elige un género</option>
                {
                    CARD_GENRES_ARRAY.map(elm => <option key={elm}>{elm}</option>)
                }
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