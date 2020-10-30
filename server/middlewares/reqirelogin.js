const { JWT_SECRET } = require("../keys");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "you are not logged in" });
    } else {
        // lets get the token assigned for the user
        const token = authorization.replace("Bearer ", "");
        // lets verify the token with jwt verify which takes two params and returns a callback function
        jwt.verify(token, JWT_SECRET, (err, payload) => {
            if (err) {
                return res.status(401).json({ error: "you are not logged in" });
            } else {
                const id = payload._id;
                console.log("the payload of jwt: ", id);
                // lets find the user from the payload id
                User.findById(id).then(userData => {

                    req.user = userData;
                    console.log("User data: ", req.user);
                });

                next();

            }

        });

    }
}