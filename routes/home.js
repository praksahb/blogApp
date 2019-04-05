const express = require('express');
const homeController = require('../controllers/home');
const middleware = require('../middlewares/auth');
const router = express.Router();

//root route- gives options to register, login
router.get('/', homeController.getIndex);
//home page to open only after login auth
router.get('/home', middleware.userAuth, homeController.getHome);

module.exports = router;