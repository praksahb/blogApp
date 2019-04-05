const express = require('express');
const homeController = require('../controllers/home');
const indexController = require('../controllers/index');
const middleware = require('../middlewares/auth');
const router = express.Router();

router.get('/', indexController.getIndex);
router.get('/home', middleware.userAuth, homeController.getIndex);

module.exports = router;