import React, { useEffect, useState } from 'react';
import { getArticles } from '../../api/api'
import ArticleCard from './ArticleCard';
import {useSearchParams} from 'react-router-dom'
import Loading from "../../utils/Loading";
import Dropdown from "../search/Dropdown";
import { sortedByField, sortedByNumber } from '../../utils/sortBy';


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
        console.log(articlesData, '<<<articlesData')
        setIsLoading(false)
    })
    .catch((err) => {
      console.error('error fetching articles', err);
      setIsLoading(false) 
    })
  }, [topicQuery])

  if (isLoading) return <Loading />;

  //switch statement here??? for article sort
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
    default:
      return articles;
  }
}
  console.log(articles, '<<<articles from Articles.jsx')
   console.log(sortMethod, '<<<sort method in Articles.jsx')
  return (
    <section >
      <div className='sorting'><Dropdown sortMethod={sortMethod} setSortMethod={setSortMethod}/></div>
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
