import React from 'react'
import {Link} from 'react-router-dom'

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`} className='card-link'>
      <div className='article-cards-container'>
        <div className='card'>
          <li>
            <span><strong>{article.title}</strong></span>
            
            <p className='align'>Author: {article.author}</p>
            
            <img src={article.article_img_url} alt={article.title}/> 
            <p className='align position-bottom'><i>Topic: {article.topic}</i></p>
            <p>{article.body}</p>
          </li>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard;
