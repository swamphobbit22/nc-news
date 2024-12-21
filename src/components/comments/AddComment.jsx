import React, { useState} from 'react'
import { addComment } from '../../api/api'

const AddComment = ({ article_id }) => {
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({author: 'happyamy2016'})

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
        username: formData.author, //backend expects username and body!!
        body: formData.body
      };

    try {
        const response = await addComment(Number(article_id), payload);
        alert("Comment added successfully!");
        setFormData({ ...formData, body: ""}) //clear it out after submission
    } catch (err) {
        setError(err.response?.data?.msg || "Something went wrong!");
    }
  }

  return (

      <div className='add-comment-container'>
        {/* <h4>Add a comment</h4> */}
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
