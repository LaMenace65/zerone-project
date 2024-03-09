const Answer = require('../models/answerModel');

const getAllAnswers = async (req, res) => {
    try {
        const answers = await Answer.find();
        res.status(200).json(answers);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getAnswer = async (req, res) => {
    try {
        const answer = await Answer.findById(req.params.id);
        res.status(200).json(answer);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createAnswer = async (req, res) => {
    try {
        const answer = await Answer.create(req.body);
        res.status(200).json(answer);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateAnswer = async (req, res) => {
    try {
        const id = req.params.id;
        const answer = await Answer.findByIdAndUpdate(id, req.body);
        if(!answer) {
            return res.status(404).json({message: 'Answer not found'});
        }

        const updatedAnswer = await Answer.findById(id);
        res.status(200).json(updatedAnswer);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteAnswer = async (req, res) => {
    try {
        const id = req.params.id;
        const answer = await Answer.findByIdAndDelete(id);
        if(!answer) {
            return res.status(404).json({message: 'Answer not found'});
        }
        res.status(200).json({message: "Answer deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getAllAnswers,
    getAnswer,
    createAnswer,
    updateAnswer,
    deleteAnswer
}