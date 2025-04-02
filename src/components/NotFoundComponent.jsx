import React from 'react'
import { Container } from 'react-bootstrap'

export default function NotFoundComponent() {
  return (
    <Container className='notFoundStyle mt-5'>
        <h1>Page not found</h1>
        <h2>The page you are looking for does not exist!</h2>
    </Container>
  )
}
