import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import SignupPage from '../pages/SignupPage/SignupPage.jsx'
import LoginPage from '../pages/LoginPage/LoginPage.jsx'
import ProfilePage from '../pages/ProfilePage/ProfilePage.jsx'
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage.jsx'
import CreateCardPage from '../pages/CreateCardPage/CreateCardPage'
import EditCardPage from '../pages/EditCardPage/EditCardPage'
import CreateDeckPage from '../pages/CreateDeckPage/CreateDeckPage'
import CardListPage from '../pages/CardListPage/CardListPage'
import DeckListPage from '../pages/DeckListPage/DeckListPage'
import EditDeckPage from '../pages/EditDeckPage/EditDeckPage'
import PrivateRoute from './PrivateRoutes'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* TODO: hacer lo de las rutas de admin */}
            <Route path='' element={<PrivateRoute admittedRoles={['ADMIN', 'USER']} />}>
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="/editar-perfil/:_id" element={<EditProfilePage />} />
                <Route path="/crear-cartas" element={<CreateCardPage />} />
                <Route path="/editar-carta/:_id" element={<EditCardPage />} />
                <Route path="/editar-mazo/:_id" element={<EditDeckPage />} />
                <Route path="/crear-cartas" element={<CreateCardPage />} />
                <Route path="/crear-mazos" element={<CreateDeckPage />} />

            </Route>

            <Route element={<PrivateRoute admittedRoles={['ADMIN']} />}>
                <Route path="/todas-las-cartas" element={<CardListPage />} />
                <Route path="/todos-los-mazos" element={<DeckListPage />} />

            </Route>

        </Routes>
    )
}

export default AppRoutes