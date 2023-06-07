import { useEffect, useState } from 'react'
import CardList from '../../components/CardList/CardList'
import { useParams } from 'react-router-dom'
import cardService from '../../services/cardService'
import { Container, Row } from 'react-bootstrap'



const CardDetailsPage = () => {

    const { _id } = useParams()

    const [userCards, setUserCards] = useState()

    const getCards = () => {

        cardService
            .getOwnerCards(_id)
            .then(({ data }) => {
                setUserCards(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCards()
    }, [_id])

    return (
        <Container>
            <h1>Tus putas cartas</h1>
            <Row>
                <CardList cards={userCards} />
            </Row>
        </Container>
    )
}

export default CardDetailsPage