const express = require('express');
const router = express.Router();

// require the controller
const assetController = require('../controllers/asset.controller');

// asset routes
router.get('', assetController.getAll);
router.post('/create', assetController.createAsset);
router.get('/:id', assetController.getAsset);
router.put('/:id/update', assetController.updateAsset);
router.delete('/:id/delete', assetController.deleteAsset);

module.exports = router;