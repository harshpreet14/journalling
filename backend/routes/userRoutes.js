const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController')

router
    .post('/users', userController.createUser); // Create a new user

router
    .route('/users/:userId')
    .get(userController.getUser) // Get a user by ID
    .patch(userController.updateUser) // Update a user by ID
    .delete(userController.deleteUser); // Delete a user by ID

module.exports = router;