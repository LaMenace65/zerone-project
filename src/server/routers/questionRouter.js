const express = require('express');
const {getAllQuestions, getQuestion, createQuestion, updateQuestion, deleteQuestion} = require("../controllers/questionController");
const router = express.Router();

// Get all questions
router.get('/', getAllQuestions);

// Get a question
router.get('/:id', getQuestion);

// Create a new question
router.post('/', createQuestion);

// Update a question
router.put('/:id', updateQuestion);

// Delete a question
router.delete('/:id', deleteQuestion);

module.exports = router;