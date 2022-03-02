const express = require('express')
const router = new express.Router()
const genreController = require('../controllers/genreController')

router.post('/create', genreController.create);
router.get('/getallgenre', genreController.getallgenre)
router.post('/songs', genreController.getSongsbygenre)

module.exports = router;