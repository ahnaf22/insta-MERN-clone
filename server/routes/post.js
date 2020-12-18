const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requirelogin = require('../middlewares/reqirelogin');

// get the Post model
const Post = mongoose.model("Post");


// creating a post  through api call
router.post('/createpost', requirelogin, (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
        return res.status(422).json({ error: "Please add all the fields" });
    } else {
        const post = new Post({
            title,
            body,
            postedBy: req.user,
        });

        post.save().then(result => {
            return res.status(201).json({ post: result });
        }).catch(err => {
            return res.status(422).json({ error: err });
        });

    }
});









module.exports = router;