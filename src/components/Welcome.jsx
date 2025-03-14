import React from 'react'
import { Alert, Container } from 'react-bootstrap'
import './componentCss/welcome.css'

export default function Welcome() {
  return (
    <Container className='text-center mt-3'>
      <Alert variant="dark" >
        <Alert.Heading></Alert.Heading>
        <h1>Benvenuto in EpiBooks ! <br/> <span>La Tua Libreria Digitale</span></h1>
      </Alert>
    </Container>
  )
}
