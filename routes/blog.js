const express = require('express');
const blogController = require('../controllers/blog');
const middleware = require('../middlewares/auth');
const router = express.Router();

//redirect route from home route
router.get('/blogs', middleware.userAuth, blogController.getBlogsIndex);
//new blog post route
router.get('/blogs/new', middleware.userAuth, blogController.createBlogIndex);
//create blog post route
router.post('/blogs', middleware.userAuth, blogController.postBlogIndex);
//show route
router.get('/blogs/:id', middleware.userAuth, blogController.showBlogIndex);
//edit route
router.get('/blogs/:id/edit', middleware.userAuth, blogController.editBlogIndex);
//update route
router.put('/blogs/:id', middleware.userAuth, blogController.putEditedBlogIndex);
//delete route
router.delete('/blogs/:id', middleware.userAuth, blogController.deleteBlogIndex);

module.exports = router;