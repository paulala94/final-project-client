import { useContext, useEffect, useState } from 'react'
// import { useParams } from "react-router-dom"
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import userService from '../../services/userService'


const ProfilePage = () => {

    const { user, logout } = useContext(AuthContext)

    const [profileUser, setProfileUser] = useState(true)
    
    useEffect(() => {
        getUser()
    }, [user._id])

    
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
            <img src={profileUser.image} alt="profile" />
            <hr />

            <Link to={`/editar-perfil/${profileUser._id}`}>Editar perfil</Link>
            <hr />
            <Link as='span' className='pointer' onClick={handleDelete}>Eliminar usuario</Link>
        </div >
    )
}

export default ProfilePage