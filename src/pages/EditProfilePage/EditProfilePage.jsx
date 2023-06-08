import { useContext } from 'react'
import { AuthContext } from './../../contexts/auth.context'
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm'
import { Container } from 'react-bootstrap'


const EditProfilePage = () => {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <h1>Perfil de {user.username}</h1>

            <EditProfileForm />
        </Container>
    )
}

export default EditProfilePage