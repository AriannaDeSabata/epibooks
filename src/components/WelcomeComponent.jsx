import React from 'react'
import { Alert, Container} from 'react-bootstrap'
import './componentCss/welcome.css'

export default function WelcomeComponent() {
  return (

      <Alert className='alertWelcome text-end px-md-5' >

        <h1>Welcome to EpiBooks !</h1>

      </Alert>

  )
}
