import React, { useContext, useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import './componentCss/singleBook.css'
import { ThemeContext } from './modules/context'
import { useNavigate } from 'react-router-dom'

export default function SingleBookComponent({book, selected, setSelected}) {


  const [theme] = useContext(ThemeContext)

  const navigate = useNavigate()
  const detailsBook = (asin) =>{
      navigate("/details/" + asin)
  }

  return (

      
      <Col xs={12} md={6} 
      onClick={()=>setSelected(book.asin)}
      className={`${selected != '' ? "select" : ''  }, mt-3`}
      >
        <Card className={theme === "light" ? "" : "darkMode"}>
          <Card.Img  src={book.img} className='imgBook'/>
          <Card.Body className='cardBody'>
            <Card.Title className='title'>{book.title}</Card.Title>
          </Card.Body>
          <Button variant="primary" className='detailsBookBtn' onClick={() => detailsBook(book.asin)}>Details</Button>
        </Card>

      </Col>


  )
}
