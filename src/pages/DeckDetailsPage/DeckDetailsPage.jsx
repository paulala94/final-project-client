import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import deckService from '../../services/deckService'
import { Container, Col } from 'react-bootstrap'
// import Card from '../../components/Card/Card'
import CardComponent from '../../components/Card/Card'


const DeckDetailsPage = () => {
    const { _id } = useParams()
    const [deck, setDeck] = useState({})
    const [cardDeck, setCardDeck] = useState(null)

    useEffect(() => {
        loadDeck()
    }, [])

    const loadDeck = () => {
        deckService
            .getDeckInfo(_id)
            .then(({ data }) => {
                console.log(cardDeck)
                setDeck(data)
                setCardDeck(data.cards)
                console.log(data.cards)
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            {!deck ? (
                <p>cargando...</p>
            ) : (
                <>
                    <h1>Detalles de {deck.name}</h1>
                    {cardDeck?.map(elm => (
                        <Col md={{ span: 4 }} key={elm._id}>
                            <CardComponent deck={deck}{...elm} />
                        </Col>
                    ))}

                </>
            )}
        </Container>
    )
}





export default DeckDetailsPage