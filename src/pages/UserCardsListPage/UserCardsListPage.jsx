import { useEffect, useState } from 'react'
import CardList from '../../components/CardList/CardList'
import { useParams } from 'react-router-dom'
import cardService from '../../services/cardService'


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
        <div className="container">
            <h1>Tus putas cartas</h1>
            <CardList cards={userCards} />
        </div>
    )
}

export default CardDetailsPage