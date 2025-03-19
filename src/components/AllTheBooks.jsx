import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'


import SingleBookComponent from './SingleBookComponent';

import booksFantasy from '../books/fantasy.json';
const arrayBooks = booksFantasy


export default function AllTheBooks() {


  const [books, setBooks]= useState(arrayBooks)

  const [search, setSearch] = useState()

  const handleSearch = (event)=>{
      setSearch(event.target.value)
      const filterBooks = books.filter(book => book.title.toLowerCase().includes(event.target.value.toLowerCase()))
      setBooks(filterBooks)
  }


  
  return (
    <Container className='mt-5'>

        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="Search" onChange={handleSearch}/>
            </Col>
          </Row>
        </Form>

        <Row className='px-3 px-md-0 gx-4 gy-4 mt-3'>

            {books.map((book)=> {
              return (
                <SingleBookComponent key={book.asin} book={book}/>
              )
            }

            )}

        </Row>
    </Container>
  )
}
