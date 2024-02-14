const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// Get all comments
router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [{ model: Post }],
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new comment
router.post("/", async (req, res) => {
  try {
    const commentData = await Comment.create({
      text: req.body.text,
      user_id: req.session.user_id,
    });

    res.redirect("/");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
