import { useContext, useState } from "react"
import { AuthContext } from "./../contexts/auth.context"
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ admittedRoles }) => {

    const { user, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <p>Cargando</p>
    }

    if (!user) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default PrivateRoute