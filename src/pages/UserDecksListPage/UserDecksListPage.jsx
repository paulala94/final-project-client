import { useEffect, useState } from 'react'
import DeckList from '../../components/DeckList/DeckList'
import { useParams } from 'react-router-dom'
import deckService from '../../services/deckService'
import { Container, Row } from 'react-bootstrap'




const UserDecksListPage = () => {

    const { _id } = useParams()

    const [userDecks, setUserDecks] = useState()

    const getDecks = () => {

        deckService
            .getOwnerDecks(_id)
            .then(({ data }) => {
                setUserDecks(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getDecks()
    }, [_id])

    return (
        <Container>
            <h1>Tus putos mazos</h1>
            <Row>
                <DeckList decks={userDecks} />
            </Row>
        </Container>
    )
}

export default UserDecksListPage