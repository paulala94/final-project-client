import { useContext } from 'react'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'


const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <h1>Perfil de {user.username}</h1>

            <Link to={`/editar-perfil/${user._id}`}>Editar perfil</Link>
        </div >
    )
}

export default ProfilePage