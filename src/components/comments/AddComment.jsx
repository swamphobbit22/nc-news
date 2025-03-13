import React, { useState, useContext} from 'react'
import { useParams } from 'react-router'
import { UserContext } from '../../context/UserContext'
import { addComment, getCommentsByArticleId } from '../../api/api'

const AddComment = () => {
    const { article_id, setComments } = useParams();
    const { user } = useContext(UserContext);

    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({author: user?.username || null})
   
      console.log('form data',formData)
      console.log('article id:', article_id)


    if (!user) {
      return <p style={{ color: "red" }}>You must be logged in to add a comment.</p>;
    }

    // Handle form input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.body.trim()) {
        setError('Comment body cannot be empty');
        return;
      }

    const payload = {
        username: user.username, //formData.author, //backend expects username and body!!
        body: formData.body
      };

    try {
        await addComment(Number(article_id), payload);
        alert("Comment added successfully!");

        //refetch the comments and update state
        // const updatedComments = await getCommentsByArticleId(article_id);
        // setComments(updatedComments)//update parent component
        // console.log('setComments in AddComment', setComments)
        setFormData({ ...formData, body: ""}) //clear it out after submission
    } catch (err) {
        setError(err.response?.data?.msg || "Something went wrong!");
    }
  }

  return (

      <div className='add-comment-container'>

        <form onSubmit={handleSubmit} className='add-comment'>
            <div>
                <textarea 
                name='body'
                value={formData.body}
                onChange={handleChange}
                placeholder='Write your comment here'
                rows='10'  />
            </div>
                <button 
                type='submit' 
                id='add-comment-btn' 
                className='add-btn'>
                    Add Comment
                </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>

  )
}

export default AddComment;
