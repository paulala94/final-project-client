import { useContext, useEffect } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Navbar, Container, Nav, Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import WavesMovile from '../WavesMovile/WavesMovile'
import WavesDesktop from '../WavesDesktop/WavesDesktop';
import logo from '../../assets/img/logo.png'

const Navigation = () => {

  const { user, logout } = useContext(AuthContext)

  return (
    <>
      <div className='wavesMobile'>
        <WavesMovile />
      </div>

      <Navbar bg="transparent" className='navbar'  >

        <Container className="d-flex align-items-start justify-content-between">

          <div>
            <Navbar.Brand >

              <Link to="/"> <img src={logo} alt="SACABÓ logo" className='logo' /></Link>
            </Navbar.Brand>
          </div>

          <div>

            <Nav className="me-auto">

              <div className='nav-mobile'>

                <>

                  <div className="mb-2" >
                    {['start']?.map(
                      (direction) => (
                        <DropdownButton
                          as={ButtonGroup}
                          key={direction}
                          id={`dropdown-button-drop-${direction}`}
                          drop={direction}
                          title={<FontAwesomeIcon icon={faBars} style={{ color: "#fff", }}
                            className='navbar-bt' />}
                        >
                          <Dropdown.Item as='span' eventKey="1" >
                            <Link to="/como-jugar">Cómo jugar</Link>
                          </Dropdown.Item>

                          {
                            user
                              ?
                              <>

                                <Dropdown.Item as='span' eventKey="6">
                                  <Link to="/perfil">Tu perfil</Link>
                                </Dropdown.Item>

                                <Dropdown.Item as='span' eventKey="6">
                                  <Link to={`/tus-mazos/${user._id}`}>Tus mazos</Link>
                                </Dropdown.Item>

                                <Dropdown.Item as='span' eventKey="6">
                                  <Link to={`/tus-cartas/${user._id}`}>Tus cartas</Link>
                                </Dropdown.Item>

                                <Dropdown.Divider />

                                <Dropdown.Item as='span' className='pointer' onClick={logout}>Cerrar Sesión</Dropdown.Item>
                              </>
                              :
                              <>
                                <Dropdown.Item as='span' eventKey="7">
                                  <Link to="/registro">Registro</Link>
                                </Dropdown.Item>
                                <Dropdown.Item as='span' eventKey="8">
                                  <Link to="/login">Login</Link>
                                </Dropdown.Item>

                              </>
                          }

                        </DropdownButton>
                      ),

                    )}

                  </div>

                </>

              </div>

            </Nav>

          </div>

        </Container>

      </Navbar>

    </>

  )

}

export default Navigation