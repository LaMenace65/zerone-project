const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true, lowercase: true, trim: true, validate(v){if (!validator.isEmail(v)) throw new Error('Email is not valid');}},
    password: {type: String, required: true, validate(v){if (!validator.isLength(v, {min: 8})) throw new Error('Password must be at least 8 characters long');}},
    role: {type: String, default: 'user'},
    reputation: {type: Number, default: 0},
    authTokens : [{authToken: {type: String, required: true}}]
}, {timestamps: true});

UserSchema.pre('save', async function() {
    if (this.isModified('password')) this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.statics.findUser = async (email, password) => {
    const user = await User.findOne({email});
    if (!user) throw new Error('User not found');
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error('Invalid password');
    return user;
};

UserSchema.methods.generateAuthTokenAndSaveUser = async function() {
    const authToken = jwt.sign({_id: this._id.toString(), role: this.role},  process.env.JWT_SECRET);
    this.authTokens.push({authToken});
    await this.save();
    return authToken;
};

UserSchema.methods.toJSON = function() {
    const user = this.toObject();
    delete user.password;
    delete user.authTokens;
    delete user.__v;
    return user;
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
