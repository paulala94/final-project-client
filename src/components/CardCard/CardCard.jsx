import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import cardService from "../../services/cardService"

// import './CardCard.css'

const CardCard = ({ name, description, genre,  owner, _id }) => {

    const [ cardToDelete, setCardToDelete ] = useState(true)

    useEffect(() => {
        getCard()
    }, _id)

    const getCard = () => {
        cardService
            .getCardInfo(_id)
            .then(({ data }) => setCardToDelete(data))
            .catch(err => console.log(err))
    }

    const handleDelete = e => {
        cardService
            .deleteCard(_id)
            .then(() => alert('carta eliminada'))
            .catch((err) => console.log(err))
    }

    return (
        <Card className="mb-3 CardCard">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {/* TODO: populate */}
                <Card.Text>Creada por: {owner}</Card.Text>

                <Link to={`/editar-carta/${_id}`}>Editar Carta</Link>
                <Link as='span' className='pointer' onClick={handleDelete}>Eliminar Carta</Link>
            </Card.Body>
        </Card>
    )
}

export default CardCard