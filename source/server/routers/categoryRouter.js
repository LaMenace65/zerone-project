const express = require('express');
const {getAllCategories, getCategory, createCategory, updateCategory, deleteCategory} = require("../controllers/categoryController");
const router = express.Router();

// Get all categories
router.get('/', getAllCategories);

// Get a category
router.get('/:id', getCategory);

// Create a category
router.post('/', createCategory);

// Modify a category
router.put('/:id', updateCategory);

// Delete a category
router.delete('/:id', deleteCategory);

module.exports = router;