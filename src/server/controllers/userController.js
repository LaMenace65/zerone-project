const User = require("../models/userModel");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).send({message: error.message});
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send({message: error.message});
    }
};

const registerUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const authToken = await user.generateAuthTokenAndSaveUser();
        res.status(200).json({user, authToken});
    } catch (err) {
        res.status(400).send({message: err.message});
    }
};

const editUser = async (req, res) => {
    const updatedInfo = Object.keys(req.body);
    try {
        updatedInfo.forEach(update => req.user[update] = req.body[update]);
        await req.user.save();
        res.status(200).send(req.user);
    } catch (error) {
        res.status(400).send({message: error.message});
    }
};

const deleteUser = async (req, res) => {
    try {
        await req.user.deleteOne();
        res.status(200).send({message: 'User has been deleted'});
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

const loginUser = async (req, res) => {
    try {
        const user = await User.findUser(req.body.email, req.body.password);
        const authToken = await user.generateAuthTokenAndSaveUser();
        res.status(200).send({user, authToken});
    } catch (error) {
        res.status(400).send({message: error.message});
    }
}

const logoutUser = async (req, res) => {
    try {
        req.user.authTokens = req.user.authTokens.filter((token) => {
            return token.authToken !== req.authToken;
        });
        await req.user.save();
        res.status(200).send({message: 'User have been disconnected'});
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

const logoutAllUser = async (req, res) => {
    try {
        req.user.authTokens = [];
        await req.user.save();
        res.status(200).send({message: 'User have been disconnected on all devices'});
    } catch (error) {
        res.status(500).send()({message: error.message});
    }
}

const profile = async (req, res) => {
    res.send(req.user);
}

module.exports = {
    getAllUsers,
    getUser,
    registerUser,
    editUser,
    loginUser,
    logoutUser,
    logoutAllUser,
    profile,
    deleteUser
}