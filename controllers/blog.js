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
    res.render('newBlog', {user: req.user.name});
};
//post new blog post created to db-
exports.postBlogIndex = (req, res, next) => {
    //create Blogpost
    Blog.create(req.body.blog, (err, newBlog) => {
        if(err) {
            console.log(err);
            return res.render('newBlog');
        }
        res.redirect('/blogs');
    });
};
//show selected blog
exports.showBlogIndex = (req, res, next) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err) {
            console.log(err);
            res.redirect('/blogs');
        } else {
            res.render('showBlog', {
                blog: foundBlog, 
                user: req.user.name
            });
        }
    });
};
//edit selected blog
exports.editBlogIndex = (req, res, next) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err) {
            console.log(err);
            res.redirect('/blogs');
        } else if(req.user.name !== foundBlog.createdBy) {
//check if edit is being done by owner of blog
            return res.redirect('/blogs');
        }
        res.render('editBlog', {
            blog: foundBlog,
            user: foundBlog.createdBy
        });
    });
};
//update blog
exports.putEditedBlogIndex = (req, res, next) => {
    //checks if update is being done by owner
    if(req.user.name === req.body.blog.createdBy) {
        Blog.findOneAndUpdate({_id: req.params.id}, req.body.blog, (err, updatedBlog) => {
            if(err) {
                console.log(err);
                res.redirect('/blogs');
            } else if(req.params.id !== updatedBlog) {
                return res.redirect('/blogs');
            }
            res.redirect('/blogs/' + req.params.id);
        });
    } else {
        res.redirect('/blogs');
    }
};
//delete blog
exports.deleteBlogIndex = (req, res, next) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err) {
            console.log(err);
            res.redirect('/blogs');
        } else if(req.user.name === foundBlog.createdBy) {
            foundBlog.remove((error, removedBlog) => {
                //res.send({ data: removedBlog });
                //res.redirect('/blogs');
            });
        }
        res.redirect('/blogs');
    });
};