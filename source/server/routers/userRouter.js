const express = require('express');
const {getAllUsers, getUser, registerUser, updateUser, deleteUser} = require("../controllers/userController");
const router = express.Router();

// Get all users
router.get('/', getAllUsers);

// Get a single user
router.get('/:id', getUser);

// Create a new user
router.post('/', registerUser);

// Modify a user
router.put('/:id', updateUser);

// Delete a user
router.delete('/:id', deleteUser);

module.exports = router;
