import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Books from '../books/fantasy.json';
import './componentCss/allTheBooks.css'


const arrayBooks = Books

export default function AllTheBooks() {
  return (
    <Container className='mt-5'>
        <Row className='px-3 px-md-0 gx-4 gy-4'>

            {arrayBooks.map(el => 
            <Col xs={6} md={3} lg={2} className='colImage' key={el.asin}>

                <a href='/'>
                    <img src={el.img} className='imageBook' key={el.asin}  alt='imageBook'></img>
                </a>

            </Col>)}
        </Row>
    </Container>
  )
}
