const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, lowercase: true},
    parent: {type: String, lowercase: true},
    description: {type: String},
    numberUsage: {type: Number, default: 0}
})

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;