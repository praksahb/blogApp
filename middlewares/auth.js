exports.passAuth = passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login"
});

exports.userAuth = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}