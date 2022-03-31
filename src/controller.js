const Service = require('./service');

const Controller = {
  getPosts: async (req, res, next) => {
    try {
      const posts = await Service.posts();
      return res.status(201).json(posts);
    } catch (error) {
      return next(error);
    }
  },

  getUsers: async (req, res, next) => {
    try {
      const users = await Service.users();
      return res.status(201).json(users);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = Controller;