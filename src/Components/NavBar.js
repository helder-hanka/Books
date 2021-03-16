import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <header>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">BOOKS</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      {/* <Nav.Link href="/">Accueil</Nav.Link> */}
      <Nav.Link eventKey={2}>
      </Nav.Link>
        <Link className="p-1" to="/">Accueil</Link>
        <Link className="p-1" to="/search">Recherche</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    
    </header>
  )
}

export default NavBar