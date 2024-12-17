import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getArticleById } from '../../api/api'
import Comments from '../comments/comments'


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
      <div id='article-inner'>
        <img src={article.article_img_url} alt={article.title} />
        <h2 className='title'>{article.title}</h2>
        <p className='paragraph'>{article.body}</p>
        <span className='comments'>Comments on this article: {article.comment_count}</span>
      </div>

      <div id='comments'>
        <Comments />
      </div>
      </section>
  )
}

export default ArticlePage;
