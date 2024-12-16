import React, { useEffect, useState } from 'react';
import { getArticles } from '../../api/api'
import ArticleCard from './ArticleCard';


const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles)
    })
  }, [])

  return (
    <div >
      <ul className='container'>
          {articles.map((article) => {
            return (
              <ArticleCard article={article} key={article.article_id} />
            )
          })}
      </ul>
      
    </div>
  )
}

export default Articles;
