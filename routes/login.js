const express = require('express');
const loginController = require('../controllers/login');
const middleware = require('../middlewares/auth');
const router = express.Router();

//show login form
router.get('/login', loginController.getIndex);

//handles user logins
router.post('/login', middleware.passAuth, loginController.postIndex);

//logout user
router.get('/logout', loginController.logoutIndex);

module.exports = router;