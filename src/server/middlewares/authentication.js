const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authentication = async (req, res, next) => {
    try {
        const authToken = req.header('Authorization').replace('Bearer ', '');
        const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET);
        const user = await User.findOne({_id: decodedToken._id, 'authTokens.authToken': authToken});
        if (!user) throw new Error();

        req.authToken = authToken;
        req.user = user;
        next();
    } catch (err) {
        res.status(401).send('Please login to access')
    }
};

module.exports = authentication;