import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Navbar.css'


export default function NavigationBar() {
  return (
    <Navbar  expand="lg">
        <Container>
        <Navbar.Brand to="/">Laptop Kingdom</Navbar.Brand>
        <Nav className="ml-auto">
        <Nav.Link as={Link} to="/" className="nav-link">Laptop</Nav.Link>
        <Nav.Link as={Link} to="/laptop" className="nav-link">Add Laptop</Nav.Link>
        </Nav>
        </Container>

    </Navbar>
  )
}
