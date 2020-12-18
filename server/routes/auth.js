const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');

// get the middlewares
const requireLogin = require('../middlewares/reqirelogin');

// lets get the user model
const User = mongoose.model("User");

// protected route for checking
// router.get('/protected', requireLogin, (req, res) => {
//     console.log("After middleware passed, User data: ", req.user);
//     res.send("Hello from protected route");
// });


// signup route
router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !email) {
        return res.status(422).json({ error: "Please add all the info" });
    }
    else {
        User.findOne({ email: email })
            .then((savedUser) => {
                if (savedUser) {
                    // console.log(savedUser);
                    return res.status(422).json({ error: "user already exists with this mail" });
                } else {

                    bcrypt.hash(password, 12)
                        .then(hashedpass => {
                            const user = new User({
                                name,
                                email,
                                password: hashedpass
                            });
                            user.save()
                                .then(user => {
                                    return res.json({ messaage: "saved successfully" });
                                })
                                .catch(err => console.log(err));
                        });

                }
            }).catch(err => console.log(err));
    }
});


// signin route
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please insert email and password" });
    }
    else[
        // lets find a user on the email address
        User.findOne({ email: email })
            .then(savedUser => {
                if (!savedUser) {
                    return res.status(422).json({ error: "invalid Email or password" });
                } else {
                    bcrypt.compare(password, savedUser.password)
                        .then(matched => {
                            if (matched) {
                                // return res.status(200).json({ message: "Successfully signed in" });
                                const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
                                return res.status(200).json({ token });

                            } else {
                                return res.status(422).json({ error: "Invalid email or password" });
                            }
                        })
                        .catch(err => console.log(err));
                }
            })
    ]
});






module.exports = router; 