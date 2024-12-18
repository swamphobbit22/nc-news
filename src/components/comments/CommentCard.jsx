import React, { useState } from 'react'
import { ThumbsUp, ThumbsDown, Plus} from 'lucide-react'
import  {updateCommentVotes}  from '../../api/api';

const CommentCard = ({ comment }) => {
  const [error, setError] = useState(null)
  const [votes, setVotes] = useState(comment.votes);
  const [hasUpVoted, setHasUpVoted] = useState(false)
  const [hasDownVoted, setHasDownVoted] = useState(false)


  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString()
  }

  
  const handleVote = async(inc_votes) => {

    if((inc_votes === 1 && hasUpVoted) || (inc_votes === -1 && hasDownVoted)) {
      alert('You have already voted - shoo, go away!')
      return;
    }

    if((inc_votes === 1 && hasDownVoted) || (inc_votes === -1 && hasUpVoted)) {
      alert('You can only vote in one direction!')
      return;
    }

    const currVotes = comment.votes

    try {

      setVotes(currVotes + inc_votes);

      const response = await updateCommentVotes(comment.comment_id, inc_votes);


      if(!response || response.comment.votes < currVotes){
        throw new Error('vote update failed')
      }

        if(inc_votes === 1) {
          setHasUpVoted(true);
          setHasDownVoted(false);
        } else {
          setHasDownVoted(true);
          setHasUpVoted(false);
        }
      

    } catch (err){
      setVotes(currVotes) //roll it back if update failed
      setError(err);
      alert('Could not update vote. Please try again.')
    }
  }

  if(error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <section>

        <div id='comments-inner'>
          <li>
            <p>Date: {formatDate(comment.created_at)}</p>
            <p>User: {comment.author}</p>
            <p>{comment.body}</p>
            <p>Total votes: {votes}</p>

          </li>
          <button 
              className="icon-thumbs-down" 
              onClick={() => handleVote(-1)} 
              disabled={hasDownVoted}>
                <ThumbsDown />
          </button>
          <button 
              className="icon-thumbs-up" 
              onClick={() => handleVote(1)} 
              disabled={hasUpVoted}>
                <ThumbsUp />
          </button>
        </div>
    </section>
  )
}

export default CommentCard
