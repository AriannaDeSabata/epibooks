import React, { useContext } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { ThemeContext } from './modules/context'

export default function MyNav({ setSearch}) {

    const [theme, setTheme] = useContext(ThemeContext)

  return (
    <Navbar expand="lg" bg={theme} data-bs-theme={theme} >
        <Container>
            <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
                <Form  >
                  <Form.Control placeholder="Search Book"  onChange={(event)=>setSearch(event.target.value)}/>
                </Form>
            </Nav>

            <Button variant={theme} onClick={()=>{theme === "light" ? setTheme("dark") : setTheme("light") }}>{theme} mode</Button>
            </Navbar.Collapse>


        </Container>
    </Navbar>
  )
}
