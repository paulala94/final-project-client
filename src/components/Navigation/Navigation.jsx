import { useContext, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import './Navigation.css'

const Navigation = () => {

  const { user, logout } = useContext(AuthContext)


  return (

    <Navbar bg="dark" variant="dark">

      <Container>

        <Navbar.Brand >
          <Link to="/">FINAL-PROJECT</Link>
        </Navbar.Brand>

        <Nav className="me-auto">

          <Nav.Link as='span'>
            <Link to="/juego">Juego</Link>
          </Nav.Link>

          <Nav.Link as='span'>
            <Link to="/crear-cartas">Crear cartas</Link>
          </Nav.Link>

          {
            user
              ?
              <>
                <Nav.Link as='span' className='pointer' onClick={logout}>Cerrar Sesión</Nav.Link>

                <Nav.Link as='span'>
                  <Link to="/perfil">{user.username}</Link>
                </Nav.Link>
              </>
              :
              <>
                <Nav.Link as='span'>
                  <Link to="/registro">Registro</Link>
                </Nav.Link>

                <Nav.Link as='span'>
                  <Link to="/login">Login</Link>
                </Nav.Link>
              </>
          }

        </Nav>

      </Container>

    </Navbar>

  )

}

export default Navigation