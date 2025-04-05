import React, { useContext, useEffect, useState } from 'react'
import { Col, Container,  Row, Spinner } from 'react-bootstrap'
import SingleBookComponent from './SingleBookComponent';
import booksFantasy from '../books/fantasy.json';
import { ThemeContext } from './modules/context';
import CommentAreaComponent from './CommentAreaComponent';


const arrayBooks = booksFantasy

export default function AllTheBooks({searchValue}) {

  const [theme] = useContext(ThemeContext)
  const [books, setBooks]= useState(arrayBooks)
  const [selected, setSelected] = useState('')


    const valueSearch = searchValue.toLowerCase()






  useEffect(()=>{
    if(searchValue !== ""){
      const filterBooks = books.filter(book => book.title.toLowerCase().includes(valueSearch))
      setBooks(filterBooks)
    }else{
      setBooks(arrayBooks)
    }
  }, [searchValue])


  
  return (
    <Container className={`${theme === "light" ? "" : "darkMode"}, mt-3`}>

        <Row className='px-3 px-md-0 gx-md-5 gy-4'>
            <Col xs={4} md={5}>
                <Row>
                    {books.map((book)=> {
                      return (
                        <SingleBookComponent key={book.asin} book={book} 
                        selected={selected} setSelected={setSelected}/>
                      )
                    }

                    )}
                </Row>
            </Col>
            <Col xs={8} md={7} 
                      style={{
                        maxHeight: '80vh', 
                        overflowY: 'auto', 
                        position:'sticky',
                        top: '30px',
                      }}>
                <CommentAreaComponent asin={selected}/>
            </Col>
        </Row>
    </Container>
  )
}
