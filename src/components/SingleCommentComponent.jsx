import React, { useState } from 'react'
import { Alert, Button, ListGroup, Stack } from 'react-bootstrap'
import './componentCss/Comment.css'

export default function SingleCommentComponent({comment, remove}) {

  const [showAlert, setShowAlert] = useState(false)
  const [alertconfirmDelete, setAlertConfirmDelete] = useState(false)

  const show = () =>{
    setShowAlert(true)
  }

  const cancel = ()=>{
    setShowAlert(false)
  }

  const confirmDelete = (id) =>{
    remove(id)
    setAlertConfirmDelete(true)
    setTimeout(()=>{
        setAlertConfirmDelete(false)
    }, 3000)
    
    setShowAlert(false)

  }

  return (
    <>

      {alertconfirmDelete && 
          <Alert className='mb-0' variant='success'>
            Commento eliminato con successo 
          </Alert>
      }



        <ListGroup.Item  className='list'key={comment._id}>
            <div className='contComment'>
                <div>
                    <p className='author'>{comment.author}</p> 
                    <span>{comment.comment}</span>
                </div>

                <Button className='btn btn-danger' onClick={show}>Elimina</Button>
          </div>


          {showAlert &&
                    <Alert  variant="success" className='mt-2'>
                    <p>
                      Confermi di voler Eliminare il seguente commento {}
                    </p>
                    <div className="d-flex justify-content-end gap-2">
                      <Button  variant="success" onClick={()=> confirmDelete(comment._id)}>
                        Accetto
                      </Button>
                      <Button  variant="danger" onClick={cancel}>
                        Cancella
                      </Button>
                    </div>
                  </Alert>
          }


        </ListGroup.Item>



    </>
  )
}
