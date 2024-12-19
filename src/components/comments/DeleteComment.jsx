import React, { useEffect, useState} from 'react'
import { deleteComment } from '../../api/api';
import CommentCard from './CommentCard';

const DeleteComment = ({ comment_id}) => {
    //set state before delete
    //set state after delete
    //set state for errors
    //set current user - hardcoded for now
    //handleDelete 
    //get delete function from api 
    //etState to updated comments after deletion
    const currentUser = 'grumpy19';

    const [comments, setComments] = useState([]);

    useEffect(() => {
        if(comment_id) {
            deleteComment(comment_id).then((commentData) => {
                setComments(commentData)
            })
            .catch((err) => {
                console.error('Error deleting the comment',err)
            });
        }
    }, [comment_id])



    const handleDelete = async (comment_id) => {
    //try catch in here
        try {
           const updatedComments = await deleteComment (comment_id);
           alert("Comment deleted successfully")
           setComments(updatedComments); //update teh state with the new comment list
        } catch(err) {
            console.log("error deleting comment, err")
        }
    };


  return (
    // map over comments
    // //pass everything to commentcard
    <div>
        {comments.map((comment) => {
            return(
            <CommentCard 
            key={comment.comment_id}
            comment={comment}
            currentUser={currentUser}
            onDelete={handleDelete}
            />
            )
        })}
      {/* <CommentCard userid??? comment_id??/> */}
    </div>
  )
}

export default DeleteComment;

