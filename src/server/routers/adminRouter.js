const express = require('express');
const {getAllUsers, getUser} = require("../controllers/adminController");
const router = express.Router();

// Get all users
router.get('/users', getAllUsers);

// Get a single user
router.get('/:id', getUser);

module.exports = router;