const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController')

router
    .route('/')
    .post(userController.createUser)
router
    .route('/me')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

module.exports = router;