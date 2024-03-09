const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
    answer: {type: mongoose.Schema.Types.ObjectId, ref: 'Answer'},
    content: {type: String, required: true},
    reputation: {type: Number, default: 0},
    status: {type: String, default: 'pending'},
}, { timestamps: true });

const Answer = mongoose.model('Answer', AnswerSchema);

module.exports = Answer;