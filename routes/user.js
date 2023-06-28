const express = require('express')
const router = express.Router()

router.get('/', userController.Auth, todoCtrl.indexNotComplete)

router.get('/completed', userController.Auth, todoCtrl.indexComplete)

router.delete('/:id', userController.Auth, todoCtrl.delete)

router.put('/:id', userController.Auth, todoCtrl.update)

router.post('/', userController.Auth, todoCtrl.create)

router.get('/:id', userController.Auth, todoCtrl.show)
