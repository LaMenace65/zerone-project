const User = require("../models/userModel");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const registerUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user) {
            res.status(404).json({message: 'User not found'});
            return;
        }

        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            res.status(404).json({message: 'User not found'});
            return;
        }

        res.status(200).json({message: "User deleted successfully"});

    } catch (error) {
        res.status(500).json({message: error.message});

    }
};


module.exports = {
    getAllUsers,
    getUser,
    registerUser,
    updateUser,
    deleteUser
}