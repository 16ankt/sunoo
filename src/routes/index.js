const express = require('express')
const router = new express.Router()


router.use('/user', require('./user'))
router.use('/artist', require('./artist'))
router.use('/genre', require('./genre'))
router.use('/language', require('./language'))
router.use('/song', require('./song'))
router.use('/favourites', require('./Favourites'))
router.use('/recentlyplayed', require('./recentlyplayed'))
router.use('/like', require('./likes'))

module.exports = router