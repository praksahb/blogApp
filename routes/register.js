const express = require('express');
const registerController = require('../controllers/register');
const router = express.Router();

//show signup form
router.get('/register', registerController.getIndex);
//handles user signup
router.post('/register', registerController.postIndex);

module.exports = router;