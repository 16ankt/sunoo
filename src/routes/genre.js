const express = require('express')
const router = new express.Router()
const genreController = require('../controllers/genreController')
const Controllers = require('../controllers/index')

router.post('/create', Controllers.genres.create);
router.get('/genres', Controllers.genres.getallgenre)
router.post('/songs', Controllers.genres.getSongsbygenre)

module.exports = router;