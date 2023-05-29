import { useContext, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import './Navigation.css'

const Navigation = () => {

  const { user, logout } = useContext(AuthContext)
  const handleOnClick = () => {

  }

  const location = useLocation()

  useEffect(() => {
    console.log("LA LOCATION DE LA APP =>", location.pathname)
  }, [location])


  return (

    <Navbar bg="dark" variant="dark">

        <Container>

          <Navbar.Brand href="/">FINAL-PROJECT</Navbar.Brand>

          <Nav className="me-auto">

            <Nav.Link as='span'>
                <Link to="/juego">Juego</Link>
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