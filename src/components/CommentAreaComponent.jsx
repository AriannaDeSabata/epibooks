import React, { useEffect, useState } from 'react'

import AddCommentComponent from './AddCommentComponent'
import CommentListComponent from './CommentListComponent'
import { Alert, Spinner } from 'react-bootstrap'

export default function CommentAreaComponent({asin}) {

  const url = "https://striveschool-api.herokuapp.com/api/books/"
  const urlDelete = "https://striveschool-api.herokuapp.com/api/comments/"
  const keyFetch ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkYzg1ZDFlMTQwNjAwMTUzMTRjYjAiLCJpYXQiOjE3NDI2Mzc0MjcsImV4cCI6MTc0Mzg0NzAyN30.of6UQtnnLiaGAObb8qZH-CMlqPNxLCV3o15v6uOaZc4"

  const [listComments, setListComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [alertError, setAlertError] = useState(false)

  useEffect(()=>{

      const getComments = async ()=>{
        try{
        const res = await fetch(url + asin + "/comments/", {
          headers: {
            Authorization: keyFetch
            }
        }

        )

        if(res.ok){
            setLoading(false)
            const json = await res.json()
            setListComments(json)
        }


        } catch(err){
          setAlertError(true)
        }
      }

      getComments()
  },[asin])

  const addComment = (newComment) =>{
    setListComments([...listComments, newComment])
  }

  const deleteComment =async (id) =>{
        try {
          const res = await fetch(urlDelete + id, {
            method: "DELETE",
            headers:{
              Authorization: keyFetch
            }
          })

          if(res.ok){
            setListComments(listComments.filter(comment => comment._id !== id))
          }else{
            console.log("errore")
          }

        } catch (error) {
          
        }
  }

  return (
    <>
      <AddCommentComponent keyFetch={keyFetch} asin={asin} add={addComment} list ={listComments}/>
      {loading &&    
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      }
      {alertError &&
        <Alert className='mt-2' variant='danger'>
          Errore! Commenti non disponibili
        </Alert>
      }

      <CommentListComponent list={listComments} removeComment={deleteComment}/>
    </>


  )
}
