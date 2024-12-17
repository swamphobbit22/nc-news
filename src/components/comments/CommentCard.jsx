import React from 'react'

const CommentCard = ({ comment }) => {

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div id='comments-inner'>
      <li>
        <p>Date: {formatDate(comment.created_at)}</p>
        <p>User: {comment.author}</p>
        <p>{comment.body}</p>
        <p>Total votes: {comment.votes}</p>
      </li>
    </div>
  )
}

export default CommentCard
