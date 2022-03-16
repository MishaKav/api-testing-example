const axios = require('axios');
const config = require('./utils/config');
const { parseUrl } = require('./utils/utils');

const Service = {
  posts: async () => {
    try {
      const response = await axios.get(config.POSTS_URL);
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
