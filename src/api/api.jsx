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

const getCommentsByArticleId = async (article_id) => {
    const { data } = await api.get(`/articles/${article_id}/comments`);
    return data.comments;
}

const updateCommentVotes = async (comment_id) => {
    const { data } = await api.patch(`/comments/${comment_id}/votes`, {inc_votes: 1})
    return data;
}

const addComment = async (article_id, commentData) => {
        const { data } = await api.post(`/articles/${article_id}/comments`, commentData);
        return data;
}

export { getArticles, getArticleById, getCommentsByArticleId, updateCommentVotes, addComment }