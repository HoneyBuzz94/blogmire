const router = require("express").Router();
const { User, Post } = require("../../models");

// Get all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new post
router.post("/", async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      text: req.body.text,
      user_id: req.session.user_id,
    });

    res.redirect("/dashboard");
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update post
router.put("/:id", async (req, res) => {
  try {
    Post.update(req.body, { where: { id: req.params.id } });
    
    res.redirect('/dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete post
router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: { id: req.params.id },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with that id" });
      return;
    }

    res.redirect('/dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
