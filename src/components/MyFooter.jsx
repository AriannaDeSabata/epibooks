import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './componentCss/footerStyle.css';
import { ThemeContext } from './modules/context';

export default function MyFooter() {
  const [theme] = useContext(ThemeContext)

  return (
    <footer className={`${theme === "light" ? "footerLight" : "darkMode"} footer`} >
        <Container>
        <Row className='pt-4 gy-0'>
            <Col xs={4} className='d-flex flex-column align-items-end text-end'>
            <h2>EPIBOOKS</h2>
            <p>&copy; 2025 Libri Inc. | All Rights Reserved</p>
            </Col>
            <Col xs={8}>
                <h6>Link Utili</h6>
                <ul>
                    <li><a href="/">Chi Siamo</a></li>
                    <li><a href="/">Contattaci</a></li>
                    <li><a href="/">Termini e Condizioni</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                </ul>
            </Col>
        </Row>
        </Container>
  
    </footer>
  )
}
