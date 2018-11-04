const express = require('express');
const router = express.Router();

function requireLogin(req, res, next) {
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
router.get('/users', requireLogin, userController.getAll);
router.post('/users/register', requireLogin, userController.registerUser);
router.post('/login', userController.authenticateUser);
router.get('/users/:id', requireLogin, userController.getUserById);
router.post('/users/lsps', requireLogin, userController.getLSPs);
router.post('/users/drivers', requireLogin, userController.getDrivers);
router.post('/users/recievers', requireLogin, userController.getRecievers);
router.put('/users/:id/update', requireLogin, userController.updateUser);
router.delete('/users/:id/delete', requireLogin, userController.deleteUser);
router.get('/logout', userController.logout);

module.exports = router;