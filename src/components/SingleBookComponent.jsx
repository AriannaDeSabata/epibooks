import React, { useContext, useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import './componentCss/singleBook.css'
import { ThemeContext } from './modules/context'
import { useNavigate } from 'react-router-dom'

export default function SingleBookComponent({book, selected, setSelected}) {

  const libro = book

  const [theme] = useContext(ThemeContext)

  const navigate = useNavigate()
  const detailsBook = (asin) =>{
      navigate("/details/" + asin)
  }

  const handleClick =()=>{
    setSelected(libro.asin)
  }

  return (

      
      <Col role='card-book' xs={12} md={6} 
      onClick={handleClick}
      className={`mt-3 ${selected === libro.asin ? "select" : ''  }`}
      >
        <Card className={theme === "light" ? "" : "darkMode"} >
          <Card.Img  src={libro.img} className='imgBook'/>
          <Card.Body className='cardBody'>
            <Card.Title className='title'>{libro.title}</Card.Title>
          </Card.Body>
          <Button variant="primary" className='detailsBookBtn' onClick={() => detailsBook(libro.asin)}>Details</Button>
        </Card>

      </Col>


  )
}
