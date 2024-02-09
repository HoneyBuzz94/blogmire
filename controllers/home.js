const router = require("express").Router();
const { User, Post } = require("../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({ include: [{ model: User }], order: [['createdAt', 'DESC']] });
    const posts = postData.map((project) => project.get({ plain: true }));

    res.render("home", {
      posts,
      logged_in: req.session.logged_in,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
