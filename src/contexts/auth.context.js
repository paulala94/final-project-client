import { createContext, useEffect, useState } from "react"
import authService from "../services/authService"
import { useNavigate } from 'react-router-dom'



const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()


    useEffect(() => {
        authenticateUser()
    }, [])

    const storeToken = token => {
        localStorage.setItem('authToken', token)
    }

    const removeToken = () => {
        localStorage.removeItem('authToken')
    }

    const logout = () => {
        setIsLoading(false)
        setUser(null)
        removeToken()
        navigate('/login')
    }

    const authenticateUser = () => {

        const token = localStorage.getItem("authToken")
        
        setIsLoading(true)


        if (token) {
            authService
                .verify(token)
                .then(({ data }) => {
                    setUser(data)
                    setIsLoading(false)
                })
                .catch(err => logout())
        } else {
            logout()
        }
    }



    return (
        <AuthContext.Provider value={{ user, authenticateUser, storeToken, logout, isLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }