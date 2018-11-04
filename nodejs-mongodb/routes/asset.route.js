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
const assetController = require('../controllers/asset.controller');

// asset routes
router.get('/assets', requireLogin, assetController.getAll);
router.post('/assets/create', requireLogin, assetController.createAsset);
router.get('/assets/:id', requireLogin, assetController.getAsset);
router.put('/assets/:id/update', requireLogin, assetController.updateAsset);
router.delete('/assets/:id/delete', requireLogin, assetController.deleteAsset);

module.exports = router;