import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import './HomePage.css'




const HomePage = () => {

    return (
        <>
        <img src={logo} alt="Logo Sacabó" />

            <Link className='play-btn' to={'/juego'}>¡Comienza el juego!</Link>
        
        
        </>
    )
}

export default HomePage