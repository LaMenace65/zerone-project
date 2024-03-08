const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}, // the password must be hashed in the database
    reputation: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now}
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

module.exports = User;
