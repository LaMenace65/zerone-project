const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    title: {type: String, required: true, unique: true},
    content: {type: String, required: true},
    category: {type: String, required: true},
    tags: [{type: String}],
    viewNumber: {type: Number, default: 0},
    status: {type: String, default: 'pending'}
},{ timestamps: true});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;