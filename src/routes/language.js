const express = require('express')
const router = new express.Router()
const Controllers = require('../controllers/index')

router.post('/create', Controllers.languages.language);
router.get('/languages', Controllers.languages.getalllanguage);
router.post('/getSongsbylanguage', Controllers.languages.getSongsbylanguage)
module.exports = router;