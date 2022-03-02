const express = require('express')
const router = new express.Router()
const songController = require('../controllers/songController')
const usermiddleware = require('../middleware.js/usermiddleware')
router.post('/create', songController.create);
// router.get('/getall', artistController.getallartist);
router.post('/addfavourite', usermiddleware.authenticateUser, songController.addtofavourite);


module.exports = router;