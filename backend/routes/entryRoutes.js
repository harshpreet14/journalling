const express = require('express');
const router = express.Router();
const entryController = require('./../controllers/entryController');


router
    .route('/')
    .get(entryController.getAllEntries)
    .delete(entryController.deleteAllEntries)
    .post(entryController.createEntry);

router
    .route('/:entry_id')
    .get(userController.getEntry)
    .delete(userController.deleteEntry)
    .patch(userController.updateEntry);

module.exports = router;