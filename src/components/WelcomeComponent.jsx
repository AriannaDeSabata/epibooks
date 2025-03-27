import React from 'react'
import { Alert} from 'react-bootstrap'
import './componentCss/welcome.css'

export default function WelcomeComponent() {
  return (

      <Alert className='alertWelcome text-end' >
        <h1>Welcome to EpiBooks ! <br/> <span>Your digital library</span></h1>
      </Alert>

  )
}
