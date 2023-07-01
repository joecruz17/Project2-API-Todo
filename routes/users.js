const express = require('express')
const router = express.Router() //express comes with a router system that it uses to define our routes and our CRUD
const userController = require('../controllers/users')


router.post('/', userController.createUser)
router.post('/login', userController.loginUser)
router.put('/:id', userController.auth, userController.updateUser)
router.delete('/delete', userController.auth, userController.deleteUser)

module.exports = router