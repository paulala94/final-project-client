import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import deckService from "../../services/deckService"


// import './CardCard.css'

const DeckCard = ({ name, description, owner, _id }) => {

    const [deckToDelete, setDeckToDelete] = useState(true)

    useEffect(() => {
        getDeck()
    }, _id)

    const getDeck = () => {
        deckService
            .getDeckInfo(_id)
            .then(({ data }) => setDeckToDelete(data))
            .catch(err => console.log(err))
    }

    const handleDelete = e => {
        deckService
            .deleteDeck(_id)
            //TODO: cambiar ese alert
            .then(() => alert('mazo eliminado'))
            .catch((err) => console.log(err))
    }

    return (
        <Card className="mb-3 DeckCard">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {/* TODO: populate */}
                <Card.Text>Creado por: {owner}</Card.Text>
                <Link to={`/editar-mazo/${_id}`}>Editar mazo</Link>
                <Link as='span' className='pointer' onClick={handleDelete}>Eliminar mazo</Link>
            </Card.Body>
        </Card>
    )
}

export default DeckCard