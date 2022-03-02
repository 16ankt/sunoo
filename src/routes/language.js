const express = require('express')
const router = new express.Router()
const languageController = require('../controllers/languageController')

router.post('/create', languageController.language);
router.get('/getalllanguage', languageController.getalllanguage);
router.post('/getSongsbylanguage', languageController.getSongsbylanguage)

module.exports = router;