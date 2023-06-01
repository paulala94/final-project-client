import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import SignupPage from '../pages/SignupPage/SignupPage.jsx'
import LoginPage from '../pages/LoginPage/LoginPage.jsx'
import ProfilePage from '../pages/ProfilePage/ProfilePage.jsx'
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage.jsx'
import CreateCardPage from '../pages/CreateCardPage/CreateCardPage'
import CardListPage from '../pages/CardList/CardList'
import EditCardPage from '../pages/EditCardPage/EditCardPage'
import PrivateRoute from './PrivateRoutes'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route element={<PrivateRoute admittedRoles={['ADMIN', 'USER']} />}>
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="/editar-perfil/:_id" element={<EditProfilePage />} />
                <Route path="/crear-cartas" element={<CreateCardPage />} />.
                <Route path="/editar-carta/:_id" element={<EditCardPage />} />
            </Route>

            <Route element={<PrivateRoute admittedRoles={['ADMIN']} />}>
                <Route path="/todas-las-cartas" element={<CardListPage />} />
            </Route>

        </Routes>
    )
}

export default AppRoutes