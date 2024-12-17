import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getArticleById } from '../../api/api'

const ArticlePage = () => {
  const { article_id } = useParams();
  const [ article, setArticle] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // setIsLoading(true);
        const articleData = await getArticleById(article_id);
        setArticle(articleData.articles[0]);
      } catch(err) {
        console.error('Error fetching article', err)
      } finally {
        setIsLoading(false);
      }
    }
    fetchArticle();
  }, [article_id])

  if(isLoading){
    return <div>Article is loading...</div>
  }

  if(!article){
    return <div>Error fetching article!</div>
  }


  return (
    <section id='article-container'> 
      <div id='article-inner'>
        <img src={article.article_img_url} alt={article.title} />
        <h2 className='title'>{article.title}</h2>
        <p className='paragraph'>{article.body}</p>
        <span className='comments'>Comments on this article: {article.comment_count}</span>
      </div>
      </section>
   
  )
}

export default ArticlePage;
