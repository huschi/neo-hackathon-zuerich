const express = require('express');
const router = express.Router();

function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
      return next();
    } else {
      var err = new Error('You must be logged in to view this page.');
      err.status = 401;
      return next(err);
    }
  }

// require the controller
const userController = require('../controllers/user.controller');

// user routes
router.get('/users', requiresLogin, userController.getAll);
router.post('/users/register', userController.registerUser);
router.post('/login', userController.authenticateUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id/update', userController.updateUser);
router.delete('/users/:id/delete', userController.deleteUser);
router.get('/logout', userController.logout);

module.exports = router;