import React, { useEffect, useState } from 'react'
import { getCommentsByUser, deleteComment } from '../../api/api'
import CommentCard from './CommentCard'

const UserComments = () => {

    const currentUser = 'happyamy2016';
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCommentsByUser(currentUser)
        .then((commentsData) => {
            setComments(commentsData)
        })
        .catch((error) => {
            setError('Error fetching user comments');
            console.error(error)
        });
    }, []);

    const handleDelete = async (comment_id) => {
        try {
           await deleteComment (comment_id);
           setComments(comments.filter(comment => comment.comment_id !== comment_id)); //update teh state with the new comment list
           alert("Comment deleted successfully")
        } catch(err) {
            console.log("error deleting comment, err")
        }
    };

    if (error) return <div>{error}</div>;

  return (
    <div className='user-comments-page'>
    <h2>Hello {currentUser}'s</h2>
    <h3>These are your comments</h3>
        {comments.length === 0 ? (<p>No comments found</p>) : 
        (
        comments.map((comment) => (
           <CommentCard 
           key={comment.comment_id}
           comment={comment}
           currentUser={currentUser}
           onDelete={handleDelete}
           />
        ))
        )}
    </div>
  )
}

export default UserComments;
