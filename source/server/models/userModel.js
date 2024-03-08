const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}, // the password must be hashed in the database
    role: {type: String, default: 'user'},
    reputation: {type: Number, default: 0},
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

module.exports = User;
