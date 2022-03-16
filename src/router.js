const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const Controller = require('./controller');

router.get('/posts', Controller.getPosts);
router.get('/users', Controller.getUsers);

module.exports = router;
