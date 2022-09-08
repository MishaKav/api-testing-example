const axios = require('axios');
const axiosRetry = require('axios-retry');
const config = require('./utils/config');

const Service = {
  posts: async () => {
    try {
      const instance = axios.create({ url: config.POSTS_URL });
      axiosRetry(instance, { retries: 3 });
      const response = await instance.get(config.POSTS_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  users: async () => {
    try {
      const response = await axios.get(config.USERS_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = Service;
