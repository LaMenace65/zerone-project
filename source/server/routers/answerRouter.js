const express = require('express');
const {getAllAnswers, getAnswer, createAnswer, updateAnswer, deleteAnswer} = require('../controllers/answerController');
const router = express.Router();

// Get all answers
router.get('/' , getAllAnswers);

// Get an answer
router.get('/:id', getAnswer);

// Create an answer
router.post('/', createAnswer);

// Update an answer
router.put('/:id', updateAnswer);

// Delete an answer
router.delete('/:id', deleteAnswer);

module.exports = router;