const express = require('express')
const router = new express.Router()
const Controllers = require('../controllers/index')
router.post('/create', Controllers.artists.create);
router.get('/artists', Controllers.artists.getallartist);
router.post('/allsongs', Controllers.artists.findbyartist)

module.exports = router;