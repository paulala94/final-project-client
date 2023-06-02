import { useEffect, useState } from "react"
import { Container, Row, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import deckService from "../../services/deckService"
import DeckList from "../../components/DeckList/DeckList"

const DeckListPage = () => {

    const [deck, setDeck] = useState()

    useEffect(() => {
        loadDecks()
    }, [])

    const loadDecks = () => {
        deckService
            .getAllDecks()
            .then(({ data }) => setDeck(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>

            <h1>Todos los mazos</h1>

            {
                <Button size="sm" variant="dark">
                    <Link to={'/crear-mazos'}>Crear nuevo mazo</Link>
                </Button>
            }

            <hr />
            <Row>
                {
                    !deck
                        ?
                        <p>Cargando...</p>
                        :
                        <DeckList deck={deck} />
                }
            </Row>

        </Container>
    )
}

export default DeckListPage