import React from 'react'
import {Link} from 'react-router-dom'
import { formatDate } from '../../utils/formatDate';

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`} className='card-link'>
      <div className='article-cards'>
        <div className='card-interior'>
          <li>
            <header>
              <h3>
                {article.title}
              </h3>
            </header>
            <p className='author'>Author: {article.author}</p>
            <figure>
              <img src={article.article_img_url} alt={article.title}/> 
              <figcaption>Topic: {article.topic}</figcaption>
            </figure>
            <footer>
              <p><i> Votes: {article.votes}</i></p>
              <p><i>Comments: {article.comment_count}</i></p>
              <p>Date: {formatDate(article.created_at)}</p>
            </footer>
          </li>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard;
