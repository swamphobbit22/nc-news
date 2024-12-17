import axios from 'axios'

const api = axios.create({
    baseURL: 'https://my-nc-news-web-service.onrender.com/api'
})

const getArticles = async () => {
    const { data } = await api.get('/articles');
    return data.articles;
}

const getArticleById = async (article_id) => {
    const { data } = await api.get(`/articles/${article_id}`);
    return data;
}

export { getArticles, getArticleById }