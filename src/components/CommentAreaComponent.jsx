import React, { useEffect, useState } from 'react'

import AddCommentComponent from './AddCommentComponent'
import CommentListComponent from './CommentListComponent'
import { Alert} from 'react-bootstrap'


export default function CommentAreaComponent({asin}) {

  const url = "https://striveschool-api.herokuapp.com/api/books/"
  const urlDelete = "https://striveschool-api.herokuapp.com/api/comments/"
  const keyFetch ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkYzg1ZDFlMTQwNjAwMTUzMTRjYjAiLCJpYXQiOjE3NDI2Mzc0MjcsImV4cCI6MTc0Mzg0NzAyN30.of6UQtnnLiaGAObb8qZH-CMlqPNxLCV3o15v6uOaZc4"

  const [listComments, setListComments] = useState([])

  const [alertError, setAlertError] = useState(false)

  const[noComment, setNoComment] = useState(false)

    useEffect(()=>{

        setNoComment(true)
    },[])


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
            const json = await res.json()
            setListComments(json)

            if (Array.isArray(json) && json.length > 0) {
              setNoComment(false);
          } else {
              setNoComment(true);
          }

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

      {alertError &&
        <Alert className='mt-2' variant='danger'>
          Errore! Commenti non disponibili
        </Alert>
      }
      <h5 className='mb-0 p-0 mt-2' >Commenti</h5>
      {noComment &&
        <Alert className='mt-2' variant='light'>
          Non ci sono commenti! Clicca su un libro per visualizzarli 
        </Alert>
      }
      <CommentListComponent list={listComments} removeComment={deleteComment}/>
    </>


  )
}
