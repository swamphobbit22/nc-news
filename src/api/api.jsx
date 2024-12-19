import axios from 'axios'

const api = axios.create({
    baseURL: 'https://my-nc-news-web-service.onrender.com/api'
})

const getArticles = async (topicQuery) => {
    const url = topicQuery ? `/articles?topic=${topicQuery}` : '/articles';
    const { data } = await api.get(url)
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

const getTopics = async () => {
    const { data } = await api.get('/topics');
    return data.topics;
}

const getCommentsByUser = async (username) => {
    const { data } = await api.get(`/comments/${username}`);
    return data.comments;
}

const deleteComment = async (comment_id) => {
    const { data } = await api.delete(`/comments/${comment_id}`)
    return data.comments;
}

const getUserById = async (username) => {
    const { data } = await api.get(`/users/${username}`);
    return data.users;
}

export { 
    getArticles, 
    getArticleById, 
    getCommentsByArticleId, 
    updateCommentVotes, 
    addComment, 
    getTopics, 
    deleteComment, 
    getCommentsByUser,
    getUserById
}