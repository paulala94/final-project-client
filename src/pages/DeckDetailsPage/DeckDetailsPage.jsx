import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import deckService from '../../services/deckService'
import { Container, Col, Row } from 'react-bootstrap'
import CardComponent from '../../components/CardComponent/CardComponent'


const DeckDetailsPage = () => {
    const { _id } = useParams()
    const [deck, setDeck] = useState({})

    useEffect(() => {
        loadDeck()
    }, [])

    const loadDeck = () => {
        deckService
            .getDeckInfo(_id)
            .then(({ data }) => {
                setDeck(data)
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
                    <Row>
                    {deck?.cards?.map(elm => (
                        <Col md={{ span: 4 }} key={elm._id}>
                            <CardComponent deck={deck}{...elm} />
                        </Col>
                    ))}
                    </Row>
                </>
            )}
        </Container>
    )
}





export default DeckDetailsPage