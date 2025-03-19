import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import './componentCss/singleBook.css'

export default function SingleBookComponent({book}) {

  const [selected, setSelected] = useState(false)

  const handleClick = ()=>{
    setSelected(!selected)

  }

  return (
    <Col xs={6} md={3} lg={2} className={selected ? 'select': '' }>
      <Card>
        <Card.Img variant="top" src={book.img} onClick={handleClick} />
        <Card.Body>
          <Card.Title className='title'>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}
