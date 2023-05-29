import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import SignupPage from '../pages/SignupPage/SignupPage.jsx'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registro" element={<SignupPage />} />
        </Routes>
    )
}

export default AppRoutes