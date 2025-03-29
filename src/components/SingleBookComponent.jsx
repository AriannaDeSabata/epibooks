import React, { useContext, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import './componentCss/singleBook.css'
import { ThemeContext } from './modules/context'

export default function SingleBookComponent({book, selected, setSelected}) {


  const [theme] = useContext(ThemeContext)


  return (

      
      <Col xs={12} 
      onClick={()=>{setSelected(book.asin)}}
      className={selected === book.asin ? "select" : ''  }
      >
        <Card className={theme === "light" ? "" : "darkMode"} >
          <Card.Img  src={book.img} variant='top'/>
          <Card.Body className='cardBody'>
            <Card.Title className='title'>{book.title}</Card.Title>
          </Card.Body>
        </Card>

      </Col>


  )
}
