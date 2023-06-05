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
import GameRulesPage from '../pages/GameRulesPage/GameRules'
import UserDecksListPage from '../pages/UserDecksListPage/UserDecksListPage'
import CardsInDecksPage from '../pages/CardsInDecksPage/CardsInDecksPage'

import PrivateRoute from './PrivateRoutes'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/como-jugar" element={<GameRulesPage />} />

            <Route path='' element={<PrivateRoute admittedRoles={['ADMIN', 'USER']} />}>
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="/editar-perfil/:_id" element={<EditProfilePage />} />
                <Route path="/crear-cartas" element={<CreateCardPage />} />
                <Route path="/editar-carta/:_id" element={<EditCardPage />} />
                <Route path="/crear-cartas" element={<CreateCardPage />} />
                <Route path="/mazo-cartas" element={<CardsInDecksPage />} />
                <Route path="/crear-mazos" element={<CreateDeckPage />} />
                <Route path="/tus-mazos/:_id" element={<UserDecksListPage />} />
                <Route path="/editar-mazo/:_id" element={<EditDeckPage />} />
            </Route>

            <Route element={<PrivateRoute admittedRoles={['ADMIN']} />}>
                <Route path="/todas-las-cartas" element={<CardListPage />} />
                <Route path="/todos-los-mazos" element={<DeckListPage />} />
            </Route>



        </Routes>
    )
}

export default AppRoutes