const express = require('express');
const router = express.Router();

// require the controller
const userController = require('../controllers/user.controller');

// user routes
router.get('/', userController.getAll);
router.post('/create', userController.createUser);
router.get('/:id', userController.getUser);
router.put('/:id/update', userController.updateUser);
router.delete('/:id/delete', userController.deleteUser);

module.exports = router;