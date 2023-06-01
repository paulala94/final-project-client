import { useContext, useEffect } from 'react'
// import { useParams } from "react-router-dom"
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import userService from '../../services/userService'


const ProfilePage = () => {

    const { user, logout } = useContext(AuthContext)
    // TODO: REALIZAR LLAMADA AAPI DURANTE MONTAJE PARA OBTENER DATOS COMPLETOS DEL USUARIO, NO DEL CONTEXTO
    // const { _id } = useParams()

    // useEffect(() => {
    //     getUser(_id)
    // }, [_id,])

    const handleDelete = e => {
        userService
            .deleteUser(user._id)
            .then(() => logout())
            .catch((err) => console.log(err))
    }
    // const getUser = () => {
    //     userService
    //         .getUser(_id)
    //         .then(({ data }) => console.log(data))
    //         .catch(err => console.log(err))
    // }


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