import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import './componentCss/singleBook.css'
import CommentAreaComponent from './CommentAreaComponent'

export default function SingleBookComponent({book}) {

  const [selected, setSelected] = useState(false)



  return (
    <>
      
      <Col xs={6} md={3} lg={2} 
      onClick={()=>{setSelected(!selected)}}
      className={selected ? 'select': '' }
      >
        <Card>
          <Card.Img variant="top" src={book.img}  />
          <Card.Body>
            <Card.Title className='title'>{book.title}</Card.Title>
          </Card.Body>
        </Card>

      </Col>


        {selected && <CommentAreaComponent asin={book.asin}/>}



      
    </>
  )
}
