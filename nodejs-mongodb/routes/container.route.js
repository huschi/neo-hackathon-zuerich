const express = require('express');
const router = express.Router();

// Require the controller
const containerController = require('../controllers/container.controller');

// container routes
router.get('', containerController.getAll);
router.post('/create', containerController.createContainer);
router.get('/:id', containerController.getContainer);
router.put('/:id/update', containerController.updateContainer);
router.delete('/:id/delete', containerController.deleteContainer);

module.exports = router;