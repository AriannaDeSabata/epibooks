import React, { useEffect, useState } from 'react'
import { Alert, Col, Form, Row } from 'react-bootstrap'

export default function AddCommentComponent({keyFetch, asin, add, list}) {

  const [showAlertSuccess, setShowAlertSuccess] = useState(false)
  const [showAlertDeny, setShowAlertDeny] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const url = "https://striveschool-api.herokuapp.com/api/comments/"
  const [newComment, setNewComment] = useState({
    author: '',
    comment:'',
    rate:'',
    elementId: ''
  })

    useEffect(() => {
      setNewComment({
        ...newComment,
        elementId: asin,
      });
    }, [asin, list]);

    const postComment = async()=> {

      try {

        if(!newComment.author || !newComment.comment || !newComment.rate){
          setShowAlertDeny(true)
          setErrorMsg("Errore! Compila i campi")
          setTimeout(()=>{
              setShowAlertDeny(false)
          }, 3000)
        }

        const res = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(newComment),
          headers:{
            "Content-Type" : 'application/json',
            Authorization : keyFetch,
          }
        }
      )

      if(res.ok){
        const responseData = await res.json()
        add({...newComment, _id : responseData._id})
        setShowAlertSuccess(true)
        setTimeout(()=>{
          setShowAlertSuccess(false)
        },3000)

        console.log(newComment)
        setNewComment({
         author:'',
          comment:'',
          rate:'', 
          elementId :''
        })
      }

      } catch (error) {
        setShowAlertDeny(true)
        setErrorMsg("Errore di Connessione")
        setTimeout(()=>{
          setShowAlertDeny(false)
      }, 2000)
      }
    }
 


  const handleChannge = (e) =>{
      setNewComment({
        ...newComment,
        [e.target.name] : e.target.value
      })
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    postComment()
  }

  return (
    <div className=''> 
    <h4>Add a Comment</h4>
      <Form onSubmit={handleSubmit}>
      <Row className='g-3'>
        <Col>
          <Form.Control type="email" placeholder="Email" name='author' onChange={handleChannge} value={newComment.author}/>
        </Col>

        <Col xs={12} md={5}>
            <Form.Select
              aria-label="Dai una valutazione da 1 a 5"
              name="rate"
              onChange={handleChannge}
              value={newComment.rate}
            >
              <option value="">Give a Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
        </Col>

        <Col xs={12} md={10}>
          <Form.Control type="text" placeholder="Comment" name='comment' onChange={handleChannge} value={newComment.comment}/>
        </Col>
        <Col xs={12} md={2}>
          <button type="submit" className='btn btn-success w-100'>Add</button>
        </Col>
      </Row>
    </Form>

      {showAlertSuccess && 
          <Alert className='mt-2' variant='success'>
            Post Added successfully!
          </Alert>
      }

      {showAlertDeny && errorMsg && (
          <Alert className='mt-2' variant='danger'>
            {errorMsg}
          </Alert>
      )

      }


    </div>

  )
}
