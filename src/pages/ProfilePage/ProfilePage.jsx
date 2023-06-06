import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import userService from '../../services/userService'
import { Tabs, Tab } from 'react-bootstrap'
import DeckList from '../../components/DeckList/DeckList'
import CardList from '../../components/CardList/CardList'
import deckService from '../../services/deckService'
import cardService from '../../services/cardService'
import './ProfilePage.css'


const ProfilePage = () => {

    const { user, logout } = useContext(AuthContext)

    const { _id } = useParams()

    const [profileUser, setProfileUser] = useState(true)

    const [userDecks, setUserDecks] = useState()

    const [userCards, setUserCards] = useState()

    const [key, setKey] = useState('Tus mazos')


    const getDecks = () => {

        deckService
            .getOwnerDecks(user._id)
            .then(({ data }) => {
                setUserDecks(data)

            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getDecks()
    }, [_id])

    useEffect(() => {
        getUser()
    }, [user._id])

    const getCards = () => {

        cardService
            .getOwnerCards(user._id)
            .then(({ data }) => {
                setUserCards(data)
            })
            .catch(err => console.log(err))
    }

    const getUser = () => {
        userService
            .getUser(user._id)
            .then(({ data }) => setProfileUser(data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getDecks()
    }, [_id])

    useEffect(() => {
        getCards()
    }, [_id])

    useEffect(() => {
        getUser()
    }, [user._id])

    const handleDelete = e => {
        userService
            .deleteUser(user._id)
            .then(() => logout())
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <div className='profile-card'>
                <img style={{ width: 100 }} src={profileUser.image} alt="profile" />
                <h1>Perfil de {profileUser.username}</h1>
                
                <Link as='span' className='edit-btn' to={`/editar-perfil/${profileUser._id}`}>Editar perfil</Link>
            </div>

            <div className='tabs'>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3 d-flex justify-content-center"
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="Tus-mazos" title="Tus mazos" className='pink-bg'>
                    </Tab>
                    <Tab eventKey="Tus-cartas" title="Tus cartas" className='orange-bg'>
                    </Tab>
                </Tabs>

                {
                    key === 'Tus-mazos'
                    ?
                    <DeckList decks={userDecks} />
                    :
                    <CardList cards={userCards} />
                }
            </div>

            <div className='button'>
                <Link as='span' className='pointer deleteUser-btn' onClick={handleDelete}>Eliminar usuario</Link>
            </div>


        </div >
    )
}


export default ProfilePage