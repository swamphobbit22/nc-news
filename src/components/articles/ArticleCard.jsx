import React from 'react'

const ArticleCard = ({ article }) => {
  return (
    <div className='card'>
      <li>
        <span><strong>{article.title}</strong></span>
        <p>Author: {article.author}</p>
        <p><i>Topic: {article.topic}</i></p>
        <img src="article.article_img_url" alt={article.title} />
        <p>{article.body}</p>
      </li>
    </div>
  )
}

export default ArticleCard;
