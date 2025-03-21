import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getArticleById } from '../../api/api'
import Comments from '../comments/comments'
import AddComment from '../comments/AddComment';
import { formatDate } from '../../utils/formatDate';


const ArticlePage = () => {
  const { article_id } = useParams();
  const [ article, setArticle] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    getArticleById(article_id)
      .then(articleData => {
        setArticle(articleData.articles[0]);
      }).catch(error => {
        setError(error);
      }).finally(() => {
        setIsLoading(false)
      })
  }, [article_id])


  if(error) {
    return <div>Error: {error.message}</div>
  }

  if(isLoading){
    return <div>Article is loading...</div>
  }



  return (
    <section id='article-container'> 
      <article id='article-inner'>
        <figure>
          <img src={article.article_img_url} alt={article.title} />
          <figcaption>Article: {article.title}</figcaption>
        </figure>
        <h2 className='title'>{article.title}</h2>
        <p className='centered'>By: {article.author}</p>
        <p className='centered date'>Date: {formatDate(article.created_at)}</p>
        <p className='paragraph'>{article.body}</p>
        <p className='comments'>Comments on this article: {article.comment_count}</p>
      </article>

      <div id='comments'> 
        <Comments />
        <h3>Add your comment here</h3>
        <AddComment article_id={article_id}/>
      </div>
    </section>
  )
}

export default ArticlePage;
