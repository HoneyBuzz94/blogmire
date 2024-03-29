const router = require("express").Router();
const { User, Post, Comment } = require("../models");

router.get("/", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User, Comment }],
      order: [["createdAt", "DESC"]],
    });
    const posts = postData.map((project) => project.get({ plain: true }));

    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
