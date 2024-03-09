const express = require('express');
const {getAllModerators} = require("../controllers/moderatorController");
const router = express.Router();

// Get all moderators
router.get('/', getAllModerators);

module.exports = router;