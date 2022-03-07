const express = require('express')
const router = new express.Router()
const Middleware = require('../middleware/index')
const Controllers = require('../controllers/index')


router.post('/getfavourites', Middleware.users.authenticateUser, Controllers.favourites.getfavourites)

module.exports = router;