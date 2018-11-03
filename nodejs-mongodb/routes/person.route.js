const express = require('express');
const router = express.Router();

// require the controller
const personController = require('../controllers/person.controller');

// person routes
router.get('/', personController.getAll);
router.post('/create', personController.createPerson);
router.get('/:id', personController.getPerson);
router.put('/:id/update', personController.updatePerson);
router.delete('/:id/delete', personController.deletePerson);

module.exports = router;