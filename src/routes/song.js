const express = require('express')
const router = new express.Router()
const Controllers = require('../controllers/index')
const Middleware = require('../middleware/index')
router.post('/create', Controllers.songs.create);
router.post('/addfavourite', Middleware.users.authenticateUser, Controllers.songs.addtofavourite);


module.exports = router;