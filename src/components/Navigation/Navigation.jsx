import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {


  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">FINAL-PROJECT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/juego">Juego</Nav.Link>
            <Nav.Link href="/tu-perfil">Perfil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navigation