import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <header>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">BOOKS</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link href="/">Accueil</Nav.Link>
      <Nav.Link eventKey={2} href="/search">
        Recherche
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    
    </header>
  )
}

export default NavBar