import { useContext } from 'react'
import { AuthContext } from './../../contexts/auth.context'


const ProfilePage = () => {
    
    const {user} = useContext(AuthContext)

    return (
        <div>
            <h1>Perfil de {user.username}</h1>

            
        </div>
    )
}

export default ProfilePage