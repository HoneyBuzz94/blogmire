const router = require("express").Router();
const { User, Post } = require("../models");

router.get("/:id", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  const postData = await Post.findByPk(req.params.id);
  let post;

  if (postData) {
    post = postData.get({ plain: true })
  };

  res.render("editpost", {
    post: post,
    username: req.session.username,
    user_id: req.session.user_id,
  });
});

module.exports = router;
