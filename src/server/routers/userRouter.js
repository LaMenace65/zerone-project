const express = require('express');
const {
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


// User profile
router.get('/me', authentication, profile);

// Create a new user
router.post('/', registerUser);

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
