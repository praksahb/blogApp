const User = require('../models/user');
const mongoose = require('mongoose');

                                    //REGISTER ROUTES CONTROLLER FUNCTIONS    
//route controller for register page
exports.getRegisterIndex = (req,res,next) => {
    res.render('register', {
        pageTitle: 'Register',
        path: '/register'
    });
};
//registers a new user
exports.postRegisterIndex = (req, res, next) => {
    User.register(new User({username: req.body.username, name: req.body.name}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, () => {
           res.redirect("/login");
        });
    });
}

                                    //LOGIN & LOGOUT ROUTES CONTROLLER FUNCTIONS
//route controller for login page                                        
exports.getLoginIndex = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login',
        path: '/login'
    });
};
//route controller-callback function for login authentication
exports.postLoginIndex = (req, res, next) => {
    //middleware.passAuth currently redirects
};
//route controller for logout
exports.logoutIndex = (req, res, next) => {
    req.logout();
    res.redirect('/');
}