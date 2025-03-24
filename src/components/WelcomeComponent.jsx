import React from 'react'
import { Alert} from 'react-bootstrap'
import './componentCss/welcome.css'

export default function WelcomeComponent() {
  return (

      <Alert className='alertWelcome text-end' >
        <h1>Benvenuto in EpiBooks ! <br/> <span>La Tua Libreria Digitale</span></h1>
      </Alert>

  )
}
