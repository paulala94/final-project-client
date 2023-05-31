import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import SignupPage from '../pages/SignupPage/SignupPage.jsx'
import LoginPage from '../pages/LoginPage/LoginPage.jsx'
import ProfilePage from '../pages/ProfilePage/ProfilePage.jsx'
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage.jsx'
import CreateCardPage from '../pages/CreateCardPage/CreateCardPage'
import PrivateRoute from './PrivateRoutes'



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/perfil" element={<PrivateRoute />} >
                <Route path="" element={<ProfilePage />} />
            </Route>
            <Route path="/editar-perfil/:_id" element={<PrivateRoute />} >
                <Route path="" element={<EditProfilePage />} />
            </Route>
            <Route path="/crear-cartas" element={<PrivateRoute />} >
                <Route path="" element={<CreateCardPage />} />
            </Route>

        </Routes>
    )
}

export default AppRoutes