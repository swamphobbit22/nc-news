import React, { useEffect, useState, useContext } from 'react'
import { getCommentsByUser, deleteComment } from '../../api/api'
import { UserContext } from '../../context/UserContext'
import CommentCard from './CommentCard'

const UserComments = () => {

    const { user } = useContext(UserContext)
    //const currentUser = 'happyamy2016';
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

        useEffect(() => {
            if(user?.username) {
                getCommentsByUser(user.username)
                .then((commentsData) => {
                    setComments(commentsData)
                })
                .catch((error) => {
                    setErroe('Error fetching user comments')
                    console.error(error)
                })
            }
        }, [user])


    const handleDelete = async (comment_id) => {
        try {
           await deleteComment (comment_id);
           setComments(comments.filter(comment => comment.comment_id !== comment_id)); //update teh state with the new comment list
           alert("Comment deleted successfully")
        } catch(err) {
            console.log("error deleting comment, err")
        }
    };

    if (!user) return <div>Please log in to view your comments</div>;
    if (error) return <div>{error}</div>;

  return (
    <div className='user-comments-page'>
    <h2>Hello {user.username}</h2>
    <h3>These are your comments</h3>
        {comments.length === 0 ? (<p>No comments found</p>) : 
        (
        comments.map((comment) => (
           <CommentCard 
           key={comment.comment_id}
           comment={comment}
           currentUser={user.username}
           onDelete={handleDelete}
           />
        ))
        )}
    </div>
  )
}

export default UserComments;
