import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import userService from '../../services/userService'
import { Nav } from 'react-bootstrap'
import DeckList from '../../components/DeckList/DeckList'
import CardList from '../../components/CardList/CardList'
import deckService from '../../services/deckService'
import cardService from '../../services/cardService'


const ProfilePage = () => {

    const { user, logout } = useContext(AuthContext)

    const { _id } = useParams()
    
    const [profileUser, setProfileUser] = useState(true)

    const [userDecks, setUserDecks] = useState()

    const [userCards, setUserCards] = useState()

    const [showDecks, setShowDecks] = useState(true)

    const [showCards, setShowCards] = useState(false)

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
    
    useEffect(() => {
        getUser()
    }, [user._id])

    const getCards = () => {

        cardService
            .getOwnerCards(_id)
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
    
    const handleDelete = e => {
        userService
            .deleteUser(user._id)
            .then(() => logout())
            .catch((err) => console.log(err))
    }


    return (
        <div>
            <h1>Perfil de {profileUser.username}</h1>
            <img style={{width:100}} src={profileUser.image} alt="profile" />
            <hr />
            <Link to={`/tus-mazos/${profileUser._id}`}>Ver tus mazos</Link>
            <hr />
            <Link to={`/tus-cartas/${profileUser._id}`}>Ver tus cartas</Link>
            <hr />
            <Link to={`/editar-perfil/${profileUser._id}`}>Editar perfil</Link>
            <hr />
            <Link as='span' className='pointer' onClick={handleDelete}>Eliminar usuario</Link>


            {/* <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={() => { setShowDecks(true), setShowCards(false) }}>
                        Tus mazos
                    </Nav.Link>
                    {showDecks ? <DeckList decks={userDecks} /> : null}
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={() => { setShowDecks(false), setShowCards(true) }}>
                        Tus cartas
                    </Nav.Link>
                    {showCards && <CardList cards={userCards} />}
                </Nav.Item>
            </Nav> */}

        </div >
        
    )
}

export default ProfilePage