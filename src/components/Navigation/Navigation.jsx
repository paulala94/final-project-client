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

      <div className='wavesDesktop'>
        <WavesDesktop />
      </div>

      <Navbar bg="transparent" className='navbar navbar-expand-md nav-desktop' expand='md'>

        <Container className="d-flex align-items-start justify-content-between ">
          <div>
            <Navbar.Brand >

              <Link to="/"> <img src={logo} alt="SACABÓ logo" /></Link>
            </Navbar.Brand>
          </div>

          <Nav className="d-flex justify-content-between full-width">
            <div className="d-flex">
              <Nav.Link as='span'>
                <Link to="/como-jugar">Cómo jugar</Link>
              </Nav.Link>
              {/* <Nav.Link as='span'>
                <Link to="/crear-cartas">Crear cartas</Link>
              </Nav.Link>

              <Nav.Link as='span'>
                <Link to="/crear-mazos">Crear mazos</Link>
              </Nav.Link>

              <Nav.Link as='span'>
                <Link to="/todas-las-cartas">Todas las cartas</Link>
              </Nav.Link> */}
            </div>


            <div className="d-flex align-items-center">
              {
                user
                  ?
                  <>
                    <div className="mb-2" >
                      {['start'].map(
                        (direction) => (
                          <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            title={user?.username}>


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

                          </DropdownButton>

                        ),)}

                    </div>
                    <div>
                      <img style={{ width: 50, borderRadius: 50 }} src={user?.image} alt="profile" className='profile-img' />
                    </div>
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
            </div>
          </Nav>

        </Container>
      </Navbar >


      <Navbar bg="transparent" className='navbar  nav-mobile'  >

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
                    {['start'].map(
                      (direction) => (
                        <DropdownButton
                          as={ButtonGroup}
                          key={direction}
                          id={`dropdown-button-drop-${direction}`}
                          drop={direction}
                          title={<FontAwesomeIcon icon={faBars} style={{ color: "#fff", }}
                            className='navbar-bt' />}
                        >
                          {/* <Dropdown.Item as='span' eventKey="1" >
                            <Link to="/como-jugar">Cómo jugar</Link>
                          </Dropdown.Item>

                          <Dropdown.Item as='span' eventKey="2">
                            <Link to="/crear-cartas">Crear cartas</Link>
                          </Dropdown.Item>

                          <Dropdown.Item as='span' eventKey="3" >
                            <Link to="/crear-mazos">Crear mazos</Link>
                          </Dropdown.Item>

                          <Dropdown.Item as='span' eventKey="4">
                            <Link to="/todos-los-mazos">Todos los mazos</Link>
                          </Dropdown.Item>

                          <Dropdown.Item as='span' eventKey="5">
                            <Link to="/todas-las-cartas">Todas las cartas</Link>
                          </Dropdown.Item> */}

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