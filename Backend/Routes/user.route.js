const express = require('express')
const router = express.Router()
const userController = require('./../Controllers/user.controller.js')

router.post('/register', userController.userRegisteration )

router.post('/login', userController.userLogin)


module.exports = router