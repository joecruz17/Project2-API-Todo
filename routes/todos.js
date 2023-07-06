const express = require('express')
const router = express.Router()
const todoCtrl = require('../controllers/todos')
const userController = require('../controllers/users')

router.get('/incomplete', userController.auth, todoCtrl.indexNotComplete)
router.get('/completed', userController.auth, todoCtrl.indexComplete)
router.delete('/:id', userController.auth, todoCtrl.delete)
router.put('/:id', userController.auth, todoCtrl.update)
router.post('/', userController.auth, todoCtrl.create)
router.get('/:id', userController.auth, todoCtrl.show)
module.exports = router