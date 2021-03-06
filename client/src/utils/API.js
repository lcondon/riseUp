import axios from 'axios';
// import { func } from 'prop-types';

export default {
  // Gets all books
  createUser: function(userData) {
    return axios.post('/api/users', userData);
  },
  // Gets the book with the given id
  getUser: function() {
    return axios.get('/api/users/loggedin');
  },

  getMatch: function(userData) {
    return axios.post('/api/messages', {
      number: userData.number,
      user: userData.user,
      topic: userData.topic
    });
  },

  getHistoricalArticle: function(date) {
    return axios.get('/api/articles/historical');
  },

  getConversations: function(userData) {
    return axios.get(`/api/messages/${userData}`);
  },

  sendMessage: function(data) {
    return axios.post(`/api/messages/${data.room}`, { message: data.message });
  },
  // Deletes the book with the given id
  updateUser: function(id, responses) {
    return axios.put('/api/users', {
      user: id,
      responses: responses
    });
  },

  logInUser: function(email, password) {
    return axios.post('/api/users/login', {
      email: email,
      password: password
    });
  },

  deleteUser: function(id) {
    return axios.delete('/api/users', { data: { id: id } });
  },

  getPastArticle: function(articleId) {
    return axios.get(`/api/articles/${articleId}`);
  },

  getArticle: function() {
    return axios.get('/api/articles');
  },

  postArticle: function() {
    return axios.post('/api/articles');
  },
  getArchive: function() {
    return axios.get('/api/articles/archive');
  }
};
