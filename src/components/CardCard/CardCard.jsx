import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import cardService from "../../services/cardService"

// import './CardCard.css'

const CardCard = ({ name, description, genre, owner, _id }) => {

    const [cardToDelete, setCardToDelete] = useState(true)

    const [ownerData, setOwnerData] = useState(null)

    useEffect(() => {
        getCard()
    }, [_id])

    const getCard = () => {
        cardService
            .getCardInfo(_id)
            .then(({ data }) => {
                setCardToDelete(data)
                setOwnerData(data.owner)
            })
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
                {ownerData && (
                    // <Card.Text>Creada por: {ownerData.username}</Card.Text>
                    <Card.Text>
                        Creada por: {ownerData && ownerData.length > 0 ? ownerData[0].username : ''}
                    </Card.Text>
                )}

                <Link to={`/editar-carta/${_id}`}>Editar Carta</Link>
                <Link as='span' className='pointer' onClick={handleDelete}>Eliminar Carta</Link>
            </Card.Body>
        </Card>
    )
}

export default CardCard