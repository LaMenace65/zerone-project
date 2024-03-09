const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, lowercase: true},
    numberUsage: {type: Number, default: 0}
})

const Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;