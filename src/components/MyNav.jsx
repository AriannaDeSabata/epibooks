import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function MyNav() {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light" >
        <Container>
            <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
