import { useContext } from 'react'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import userService from '../../services/userService'


const ProfilePage = () => {

    const { user, logout } = useContext(AuthContext)
    console.log(user)

    const handleDelete = e => {
        userService.deleteUser(user._id).then(() => logout())
            .catch((err) => console.log(err))
    }


    return (
        <div>
            <h1>Perfil de {user.username}</h1>
            <img src={user.image} alt="profile" />
            <hr />

            <Link to={`/editar-perfil/${user._id}`}>Editar perfil</Link>
            <hr />
            <Link as='span' className='pointer' onClick={handleDelete}>Eliminar usuario</Link>


        </div >
    )
}

export default ProfilePage