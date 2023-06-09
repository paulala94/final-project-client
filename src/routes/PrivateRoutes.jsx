import { useContext, useState } from "react"
import { AuthContext } from "./../contexts/auth.context"
import { Link, Navigate, Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'


const PrivateRoute = ({ admittedRoles }) => {

    const { user, isLoading, owner } = useContext(AuthContext)

    if (isLoading) {
        return <p>Cargando</p>
    }

    if (!user) {
        return <Navigate to="/login" />
    }

    if (!admittedRoles.includes(user.role)) {
        return (
            <Container>
                <p>Usuario no autorizado</p>
                <Link to="/">Volver al inicio</Link>
            </Container>
        )
    }

    // if (!admittedOwner.includes(owner._id)) {
    //     return (
    //         <div className="container">
    //             <p>Usuario no autorizado</p>
    //             <Link to="/">Volver al inicio</Link>
    //         </div>
    //     )
    // }

    return <Outlet />
}

export default PrivateRoute