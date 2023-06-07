import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo-bi.svg'
import './HomePage.css'
import { Container } from 'react-bootstrap'




const HomePage = () => {

    return (
        <Container className='containerHP'>

            <div className='d-flex justify-content-center'>

                <Link className='play-btn pink' to={'/juego'}>¡Comienza el juego!</Link>

            </div>
            <div className="logoHP">

                <img src={logo} alt="Logo Sacabó" />
            </div>
            <div>
                <Link className='play-btn orange' to={'/como-jugar'}>¿Cómo se juega?</Link>

            </div>

        </Container>
    )
}

export default HomePage