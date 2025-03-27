import React, { useContext, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import './componentCss/singleBook.css'
import CommentAreaComponent from './CommentAreaComponent'
import { ThemeContext } from './modules/context'

export default function SingleBookComponent({book}) {

  const [selected, setSelected] = useState(false)
  const [theme] = useContext(ThemeContext)


  return (
    <>
      
      <Col xs={6} md={3} lg={2} 
      onClick={()=>{setSelected(!selected)}}
      className={selected ? 'select': '' }

      >
        <Card className={theme === "light" ? "" : "darkMode"} >
          <Card.Img  src={book.img} variant='top'/>
          <Card.Body className='cardBody'>
            <Card.Title className='title'>{book.title}</Card.Title>
          </Card.Body>
        </Card>

      </Col>


        {selected && <CommentAreaComponent asin={book.asin}/>}



      
    </>
  )
}
