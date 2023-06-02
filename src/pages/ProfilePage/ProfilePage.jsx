import { useContext, useEffect, useState } from 'react'
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
            <img style={{width:100}} src={profileUser.image} alt="profile" />
            <hr />
            <Link to={`/tus-mazos/${profileUser._id}`}>Ver tus mazos</Link>
            <hr />
            <Link to={`/editar-perfil/${profileUser._id}`}>Editar perfil</Link>
            <hr />
            <Link as='span' className='pointer' onClick={handleDelete}>Eliminar usuario</Link>
        </div >
    )
}

export default ProfilePage