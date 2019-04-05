//controller for two main get routes- before login and after login

exports.getHome = (req,res, next) => {
    res.redirect('/blogs');
};

exports.getIndex = (req,res,next) => {
    res.render('index', {
        pageTitle:'Index',
        path:'/'
    });
};