import { useEffect, useState } from 'react'
import DeckList from '../../components/DeckList/DeckList'
import { useParams } from 'react-router-dom'
import deckService from '../../services/deckService'


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
        <div className="container">
            <h1>Tus putos mazos</h1>
            <DeckList decks={userDecks} />
        </div>
    )
}

export default UserDecksListPage