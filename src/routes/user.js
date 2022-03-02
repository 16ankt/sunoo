const express = require('express')
const router = new express.Router()
const userController = require('../controllers/usercontroller')
const auth = require('../middleware.js/usermiddleware')

router.post('/login', userController.login);
router.post('/logout', userController.logout)
router.post('/update', auth.authenticateUser, userController.updateuser)


module.exports = router;