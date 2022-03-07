const express = require('express')
const router = new express.Router()
const Controllers = require('../controllers/index')
const Middleware = require('../middleware/index')


router.post('/songs', Middleware.users.authenticateUser, Controllers.played.recentlyplayed);
router.get('/recentsongs', Middleware.users.authenticateUser, Controllers.played.getrecentsongs);

module.exports = router;