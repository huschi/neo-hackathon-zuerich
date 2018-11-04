const express = require('express');
const router = express.Router();

// require the controller
const assetController = require('../controllers/asset.controller');

// asset routes
router.get('/assets', assetController.getAll);
router.post('/assets/create', assetController.createAsset);
router.get('/assets/:id', assetController.getAsset);
router.put('/assets/:id/update', assetController.updateAsset);
router.delete('/assets/:id/delete', assetController.deleteAsset);

module.exports = router;