const express = require('express');
const router = express.Router();
const entryController = require('./../controllers/entryController');

router
    .route('/')
    .get(entryController.getAllEntries)
    .post(entryController.createEntry);

router
    .route('/:entry_id')
    .get(entryController.getEntry)
    .delete(entryController.deleteEntry)
    .patch(entryController.updateEntry);

module.exports = router;