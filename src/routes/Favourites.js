const express = require('express')
const router = new express.Router()
const favouriteController = require('../controllers/favouriteController')

router.post('/getfavourites', favouriteController.getfavourites)

module.exports = router;