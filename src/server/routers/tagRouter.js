const express = require('express');
const {getAllTags, getTag, createTag, updateTag, deleteTag} = require("../controllers/tagController");
const router = express.Router();

// Get all tags
router.get('/', getAllTags);

// Get a single tag
router.get('/:id', getTag);

// Create a new tag
router.post('/', createTag);

// Update a tag
router.put('/:id', updateTag);

// Delete a tag
router.delete('/:id', deleteTag);

module.exports = router;