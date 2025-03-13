import React, { useEffect, useState } from 'react';
import { getArticles } from '../../api/api'
import ArticleCard from './ArticleCard';
import {useSearchParams} from 'react-router-dom'
import Loading from "../../utils/Loading";
import Dropdown from "../search/Dropdown";
import { sortedByDate, sortedByField, sortedByNumber } from '../../utils/sortBy';


const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortMethod, setSortMethod] = useState('none') //default empty to keep current view
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

  if (isLoading) return <section className='main'><Loading /></section>;

const sortedArticles = () => {

  if(sortMethod === 'none'){
    return articles;
  }

  switch(sortMethod) {
    case 'titleAsc':
      return sortedByField(articles, 'title', 'asc');
    case 'titleDesc':
      return sortedByField(articles, 'title', 'desc');
    case 'votesAsc':
      return sortedByNumber(articles, 'votes', 'asc');
    case 'votesDesc':
      return sortedByNumber(articles, 'votes', 'desc');
    case 'CommentCountAsc':
      return sortedByNumber(articles, 'comment_count', 'asc');
    case 'CommentCountDesc':
      return sortedByNumber(articles, 'comment_count', 'desc');
    case 'dateAsc':
      return sortedByDate(articles, 'created_at', 'asc');
    case 'dateDesc':
      return sortedByDate(articles, 'created_at', 'desc');
    default:
      return articles;
  }
}

  return (
    <section >
      <div className='sorting-container'>
      <div className='sorting'>
        <Dropdown sortMethod={sortMethod} setSortMethod={setSortMethod}/>
        </div>
      </div>
      
      <ul className="articles-list-container">
          {sortedArticles().map((article) => {
            return (
              <ArticleCard article={article} key={article.article_id} />
            )
          })}
      </ul>
      
    </section>
  )
}

export default Articles;
