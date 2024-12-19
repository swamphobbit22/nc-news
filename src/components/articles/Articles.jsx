import React, { useEffect, useState } from 'react';
import { getArticles } from '../../api/api'
import ArticleCard from './ArticleCard';
import {useSearchParams} from 'react-router-dom'
import Loading from "../../utils/Loading";
import SearchBar from "../search/SearchBar";


const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get('topic');

 
  useEffect(() => {
    setIsLoading(true)
    getArticles(topicQuery).then((articlesData) => {
        setArticles(articlesData)
        setIsLoading(false)
    })
    .catch((err) => {
      console.error('error fetching articles', err);
      setIsLoading(false) 
    })
  }, [topicQuery])

  if (isLoading) return <Loading />;

  return (
    <section >
      <div><SearchBar /></div>
      <ul className='container'>
      
          {articles.map((article) => {
            return (
              <ArticleCard article={article} key={article.article_id} />
            )
          })}
      </ul>
      
    </section>
  )
}

export default Articles;
