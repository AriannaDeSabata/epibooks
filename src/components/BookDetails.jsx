import React, { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import booksFantasy from '../books/fantasy.json';
import './componentCss/detailsBook.css'
import CommentAreaComponent from './CommentAreaComponent';
import { ThemeContext } from './modules/context';

const arrayBooks = booksFantasy

export default function BookDetails() {

  const [theme] = useContext(ThemeContext)
  
  const {asin} = useParams()

  const book = arrayBooks.find((book) => book.asin === asin)



  return (
    <Container className='px-4 mt-3 imgDetailsBook'>
      <Row className='mb-3 gy-2 gy-md-5'>


          <Col>
              <Card  className={theme === "light" ? "" : "darkMode"}>
                <Card.Body className='mx-5 mx-md-0 '>
                  <Card.Title className='fs-1'>{book.title}</Card.Title>
                  <div className='textDetails'>
                      <p>{book.category}</p>
                      <span>{book.price} €</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className='imgDetails'>
                <img src={book.img}/>
            </Col>

            <Col xs={12} className='mt-5'>
                <CommentAreaComponent asin={book.asin} />
            </Col>
      </Row>

    </Container>
  )
}
