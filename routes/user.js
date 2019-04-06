const express = require('express');
const userController = require('../controllers/user');
const middleware = require('../middlewares/auth');
const router = express.Router();

                //register routes
//show signup form
router.get('/register', userController.getRegisterIndex);
//handles user signup
router.post('/register', userController.postRegisterIndex);

                //login logout routes
//show login form
router.get('/login', userController.getLoginIndex);
//handles user logins
router.post('/login', middleware.passAuth, userController.postLoginIndex);
//logout user
router.get('/logout', userController.logoutIndex);

module.exports = router;