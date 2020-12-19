const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requirelogin = require('../middlewares/reqirelogin');

// get the Post model
const Post = mongoose.model("Post");

// get all the posts
router.get('/allposts', (req, res) => {
    Post.find()
        .populate('postedBy', '-password')
        .then(posts => {
            return res.status(200).json({ posts: posts });
        })
        .catch(err => {
            return res.status(400).json({ error: err });
        });
});
// get all the posts create d by user
router.get('/myposts', requirelogin, (req, res) => {
    Post.find({ postedBy: req.user._id })
        .populate('postedBy', '-password')
        .then(posts => {
            return res.status(200).json({ posts: posts });
        })
        .catch(err => {
            return res.status(400).json({ error: err });
        });
});

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