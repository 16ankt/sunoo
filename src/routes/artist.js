const express = require('express')
const router = new express.Router()
const artistController = require('../controllers/artistController')
const usermiddleware = require('../middleware.js/usermiddleware')
router.post('/create', artistController.create);
router.get('/allartist', artistController.getallartist);
router.post('/allsongs', usermiddleware.authenticateUser, artistController.findbyartist)

module.exports = router;