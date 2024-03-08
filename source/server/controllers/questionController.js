const Question = require("../models/questionModel");

const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createQuestion = async (req, res) => {
    try {
        const tags = req.body.tags;
        if (tags.length > 6) {
            res.status(400).json({message: "Tags can't be more than 6"});
            return;
        }

        const question = await Question.create(req.body);
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateQuestion = async (req, res) => {
    try {
        const id = req.params.id;
        const question = await Question.findByIdAndUpdate(id, req.body);
        if(!question) {
            res.status(404).json({message: 'Question not found'});
            return;
        }



        const updatedQuestion = await Question.findById(id);
        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteQuestion = async (req, res) => {
    try {
        const id = req.params.id;
        const question = await Question.findByIdAndDelete(id);
        if(!question) {
            res.status(404).json({message: 'Question not found'});
            return;
        }
        res.status(200).json({message: "Question deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getAllQuestions,
    getQuestion,
    createQuestion,
    updateQuestion,
    deleteQuestion
}