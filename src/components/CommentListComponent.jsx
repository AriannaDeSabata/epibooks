import React from 'react'
import { ListGroup } from 'react-bootstrap'

import SingleCommentComponent from './SingleCommentComponent'

export default function CommentListComponent({list, removeComment}) {

  return (

       <ListGroup className='mt-2' >

                {list.map((comment) => (
                <SingleCommentComponent comment={comment} key={comment._id} remove={removeComment}/>
                ))}

        </ListGroup>

  )
}
