import React, { useContext } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { ThemeContext } from './modules/context'
import { Link } from 'react-router-dom'

export default function MyNav({ setSearch}) {

    const [theme, setTheme] = useContext(ThemeContext)

  return (
    <Navbar expand="lg" bg={theme} data-bs-theme={theme} >
        <Container>
            <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to='/' className='nav-link'>Home</Link>
                <Link  className='nav-link'>About</Link>
                <Link  className='nav-link'>Browse</Link>
                
                <Form >
                  <Form.Control type='search' placeholder="Search Book"  onChange={(event)=>setSearch(event.target.value)}/>
                </Form>
            </Nav>

            <Button variant={theme} onClick={()=>{theme === "light" ? setTheme("dark") : setTheme("light") }}>{theme} mode</Button>
            </Navbar.Collapse>


        </Container>
    </Navbar>
  )
}
