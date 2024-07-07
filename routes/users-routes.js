const express = require('express');
const usersController = require('../controller/users-controller');

const router = express.Router();

router.post('/fb-login', usersController.login);
router.get('/instagram-details', usersController.fetchInstaDetails);

module.exports = router;