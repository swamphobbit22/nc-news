import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCommentsByArticleId } from '../../api/api'
import CommentCard from '../comments/CommentCard'


const Comments = () => {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

      // console.log('article id in comments.jsx', article_id)
      
    useEffect(() => {
        const fetchComments = async () => {
          try {
            setIsLoading(true);
            const commentData = await getCommentsByArticleId(article_id);
            setComments(commentData);
          } catch(err) {
            console.error('Error fetching comments', err)
          } finally {
            setIsLoading(false);
          }
        }
        fetchComments();
      }, [article_id])

      if(isLoading){
        return <div>Comments are loading...</div>
      }
    
      if(comments.length === 0){
        return <div>No comments found!</div>
      }
    

  return (
    <div className='commentcard-container'>
        <ul className="card-list">
            {comments.map((comment) => {
                return(
                    <CommentCard comment={comment} key={comment.comment_id}/>
                )
            })}
        </ul>
      
    </div>
  )
}

export default Comments
