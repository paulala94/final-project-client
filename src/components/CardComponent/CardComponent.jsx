import { useEffect, useState } from "react"
import { Card, Button, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'
import cardService from "../../services/cardService"
import OwnerDeckDropdown from "../OwnerDeckDropdown/OwnerDeckDropdown"
import deckService from "../../services/deckService"

import './CardComponent.css'

const CardComponent = ({ name, description, genre, owner, _id, deck }) => {

    const cardIds = deck?.cards?.map(elm => elm._id)

    const [cardToDelete, setCardToDelete] = useState(true)

    const [ownerData, setOwnerData] = useState(null)

    const [cards, setCards] = useState()

    const [decks, setDecks] = useState()

    useEffect(() => {
        loadCards()
    }, [])

    const loadCards = () => {
        cardService
            .getAllCards()
            .then(({ data }) => setCards(data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        loadDecks()
    }, [])

    const loadDecks = () => {
        deckService
            .getAllDecks()
            .then(({ data }) => setDecks(data))
            .catch(err => console.log(err))
    }

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

    const handleRemove = () => {
        const deckId = deck?._id
        cardService
            .removeCardFromDeck(_id, deckId)
            .then(() => {
                console.log(_id)
                alert("carta sacada del mazo")
                setCardToDelete(false)
                setCards(cards.filter((card) => card._id !== _id))
            })
            .catch((err) => console.log(err))
    }

    return (
        <Card className="mb-3 Card">
            <Card.Body>
                <Card.Title><strong>{name}</strong></Card.Title>
                <Card.Text>{description}</Card.Text>
                {ownerData && (
                    <Card.Text>
                        Creada por: {ownerData && ownerData.length > 0 ? ownerData[0].username : ''}
                    </Card.Text>
                )}
                <>
                    {
                        !cards && !decks
                            ?
                            <p>Cargando...</p>
                            :
                            cardIds?.includes(_id)
                                ?
                                <>
                                    <Link as='span' className='pointer' onClick={handleRemove}>Eliminar esta carta del mazo</Link>
                                </>
                                :
                                <>
                                    <Button className="card-bt">
                                        <Link to={`/editar-carta/${_id}`}>Editar Carta</Link>
                                    </Button>

                                    <OwnerDeckDropdown card_id={_id} />

                                    <Button className="card-bt-delete">
                                        <Link as='span' className='pointer' onClick={handleDelete}>Eliminar Carta</Link>
                                    </Button>



                                </>
                    }
                </>
            </Card.Body>
        </Card>
    )
}

export default CardComponent