const express = require('express');
const {
    getAllUsers,
    getUser,
    registerUser,
    editUser,
    deleteUser,
    loginUser,
    profile,
    logoutUser,
    logoutAllUser
} = require("../controllers/userController");
const authentication = require("../middlewares/authentication");
const router = express.Router();

// Get all users
router.get('', getAllUsers);

// Get a single user
router.get('/:id', getUser);

// User profile
router.get('/me', authentication, profile);

// Create a new user
router.post('/signup', registerUser);

// Modify a user
router.patch('/me', authentication, editUser);

// Delete a user
router.delete('/me', authentication, deleteUser);

// Login a user
router.post('/login', loginUser);

// Logout on one device
router.post('/logout', authentication, logoutUser);

// Logout on all devices
router.post('/logout/all', authentication, logoutAllUser);

module.exports = router;
