const express = require('express')
const router = new express.Router()
const Controllers = require('../controllers/index')
const Middleware = require('../middleware/index')
router.post('/login', Controllers.users.login);
router.post('/logout', Controllers.users.logout)
router.post('/update', Middleware.users.authenticateUser, Controllers.users.updateuser)


module.exports = router;