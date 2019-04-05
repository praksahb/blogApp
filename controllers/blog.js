const Blog = require('../models/blog');
const mongoose = require('mongoose');

//actual home page after login- shows all existing blog posts
exports.getBlogsIndex = (req, res, next) => {
    Blog.find({}, (err, blogs) => {
        if(err) {
            console.log(err);
        } else {
            res.render('blogs', {
                blogs: blogs,
                user: req.user.name
            });
        }
    });
}
//create new blog post page- render new.ejs
exports.createBlogIndex = (req, res, next) => {
    res.render('new', {user: req.user.name});
};
//post new blog post created to db-
exports.postBlogIndex = (req, res, next) => {
    //create Blogpost
    Blog.create(req.body.blog, (err, newBlog) => {
        if(err) {
            console.log(err);
            return res.render('new');
        }
        res.redirect('/blogs');
    });
};