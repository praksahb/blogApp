const User = require('../models/user');
const mongoose = require('mongoose');


exports.getIndex = (req,res,next) => {
    res.render('register', {
        pageTitle: 'Register',
        path: '/register'
    });
};

exports.postIndex = (req, res, next) => {
    User.register(new User({username: req.body.username, name: req.body.name}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/");
        });
    });
}