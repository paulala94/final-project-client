import { useEffect, useState } from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import deckService from "../../services/deckService"
import './Deck.css'

// import './Card.css'

const DeckCard = ({ name, description, owner, _id }) => {

    const [deckToDelete, setDeckToDelete] = useState(true)

    const [ownerData, setOwnerData] = useState(null)

    useEffect(() => {
        getDeck()
    }, [_id])

    const getDeck = () => {
        deckService
            .getDeckInfo(_id)
            .then(({ data }) => {
                setDeckToDelete(data)
                setOwnerData(data.owner)
            })
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
        <Card className="mb-3 DeckCard deck-bg">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>
                    Creado por: {ownerData && ownerData.length > 0 ? ownerData[0].username : ''}
                </Card.Text>

                <Button className="deck-bt">
                    <Link to={`/mazo-detalles/${_id}`}>Ver detalles</Link>
                </Button>
                <Button className="deck-bt">
                    <Link to={`/editar-mazo/${_id}`}>Editar mazo</Link>
                </Button>

                <Button className="deck-bt-delete">
                    <Link as='span' className='pointer deck-bt-delete' onClick={handleDelete}>Eliminar mazo</Link>
                </Button>

            </Card.Body>
        </Card>
    )
}

export default DeckCard