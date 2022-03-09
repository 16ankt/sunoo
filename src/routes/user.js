const express = require('express')
const router = new express.Router()
const Controllers = require('../controllers/index')
const Middleware = require('../middleware/index')
router.post('/login', Controllers.users.login);
router.get('/logout', Middleware.users.authenticateUser, Controllers.users.logout)
router.post('/update', Middleware.users.authenticateUser, Controllers.users.updateuser)
router.get('/likes', Middleware.users.authenticateUser, Controllers.users.userlikedsongs)
router.get('/alllikes', Controllers.users.alllikedsongs)

module.exports = router;