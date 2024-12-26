import { useState, useEffect } from 'react'
import ArticleCard from '../articles/ArticleCard';
import { getArticles } from "../../api/api";
import { getMostRecentArticles } from '../../utils/getMostRecentArticles';
import Loading from '../../utils/Loading';


const Main = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching articles:', err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <section className='main'><Loading /></section> ;

  const recentArticles = getMostRecentArticles(articles, 4); // Get top 5 articles

  return (
    <section className='main'>
      <h2>Most Recent Articles</h2>
      <ul className="articles-list-container">
        {recentArticles.map((article) => (
          <ArticleCard article={article} key={article.article_id} />
        ))}
      </ul>
    </section>
  );
}

export default Main;
