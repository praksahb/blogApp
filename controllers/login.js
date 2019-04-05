exports.getIndex = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login',
        path: '/login'
    });
};

exports.postIndex = (req, res, next) => {

};

exports.logoutIndex = (req, res, next) => {
    req.logout();
    res.redirect('/');
}