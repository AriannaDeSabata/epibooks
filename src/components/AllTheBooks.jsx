import React, { useContext, useEffect, useState } from 'react'
import { Container,  Row } from 'react-bootstrap'


import SingleBookComponent from './SingleBookComponent';

import booksFantasy from '../books/fantasy.json';
import { ThemeContext } from './modules/context';
const arrayBooks = booksFantasy


export default function AllTheBooks({searchValue}) {

  const [theme] =useContext(ThemeContext)
  const [books, setBooks]= useState(arrayBooks)

  useEffect(()=>{
    if(searchValue !== ""){
      const filterBooks = books.filter(book => book.title.toLowerCase().includes(searchValue.toLowerCase()))
      setBooks(filterBooks)
    }else{
      setBooks(arrayBooks)
    }
  }, [searchValue])


  
  return (
    <Container className='mt-5' className={theme === "light" ? "" : "darkMode"}>

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
