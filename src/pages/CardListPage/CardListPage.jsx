import { useEffect, useState } from "react"
import { Container, Row, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import cardService from "../../services/cardService"
import CardList from "../../components/CardList/CardList"
import ArrowUp from "../../components/ArrowUp/ArrowUp"


const CardListPage = () => {

    const [cards, setCards] = useState()

    useEffect(() => {
        loadCards()
    }, [])

    const loadCards = () => {
        cardService
            .getAllCards()
            .then(({ data }) => setCards(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>

            <h1>Todas las cartas</h1>

            <Button size="sm" variant="dark">
                <Link to={'/crear-cartas'}>Crear nueva carta</Link>
            </Button>

            <hr />

            <Row>
                {
                    !cards
                        ?
                        <p>Cargando...</p>
                        :
                        <CardList cards={cards} />
                }

            </Row>
            <ArrowUp />
        </Container>
    )
}

export default CardListPage