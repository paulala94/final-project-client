import { useContext } from 'react'
import { AuthContext } from './../../contexts/auth.context'
// import { Link } from 'react-router-dom'
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm'


const EditProfilePage = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <h1>Perfil de {user.username}</h1>

            <EditProfileForm />
        </div>
    )
}

export default EditProfilePage