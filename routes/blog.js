const express = require('express');
const blogController = require('../controllers/blog');
const middleware = require('../middlewares/auth');
const router = express.Router();

//redirect route from home route
router.get('/blogs', middleware.userAuth, blogController.getBlogsIndex);
//new blog post route
router.get('/blogs/new', middleware.userAuth, blogController.createBlogIndex);
//create blog post route
router.post('/blogs', middleware.userAuth, blogController.postBlogIndex)

module.exports = router;