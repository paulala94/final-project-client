import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import GameRulesPage from '../pages/GameRulesPage/GameRules'
import GamePage from '../pages/GamePage/GamePage'
import GameOGDeckPage from '../pages/GameOGDeckPage/GameOGDeckPage'
import SignupPage from '../pages/SignupPage/SignupPage.jsx'
import LoginPage from '../pages/LoginPage/LoginPage.jsx'
import ProfilePage from '../pages/ProfilePage/ProfilePage.jsx'
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage.jsx'
import CreateCardPage from '../pages/CreateCardPage/CreateCardPage'
import EditCardPage from '../pages/EditCardPage/EditCardPage'
import CardListPage from '../pages/CardListPage/CardListPage'
import CreateDeckPage from '../pages/CreateDeckPage/CreateDeckPage'
import EditDeckPage from '../pages/EditDeckPage/EditDeckPage'
import DeckListPage from '../pages/DeckListPage/DeckListPage'
import UserDecksListPage from '../pages/UserDecksListPage/UserDecksListPage'
import UserCardsListPage from '../pages/UserCardsListPage/UserCardsListPage'
import DeckDetailsPage from '../pages/DeckDetailsPage/DeckDetailsPage'

import PrivateRoute from './PrivateRoutes'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/juego" element={<GamePage />} />
            <Route path="/juego/mazo-original" element={<GameOGDeckPage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/como-jugar" element={<GameRulesPage />} />

            <Route path='' element={<PrivateRoute admittedRoles={['ADMIN', 'USER']} />}>
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="/editar-perfil/:_id" element={<EditProfilePage />} />
                <Route path="/crear-cartas" element={<CreateCardPage />} />
                <Route path="/editar-carta/:_id" element={<EditCardPage />} />
                <Route path="/tus-cartas/:_id" element={<UserCardsListPage />} />
                <Route path="/crear-mazos" element={<CreateDeckPage />} />
                <Route path="/tus-mazos/:_id" element={<UserDecksListPage />} />
                <Route path="/mazo-detalles/:_id" element={<DeckDetailsPage />} />
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