const express = require('express')
const router = new express.Router()
const Controllers = require('../controllers/index')
const Middleware = require('../middleware/index')
router.post('/liked', Middleware.users.authenticateUser, Controllers.likes.liked)

module.exports = router;