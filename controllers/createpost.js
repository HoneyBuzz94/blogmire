const router = require("express").Router();
const { User, Post } = require("../models");

router.get("/", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  res.render("createpost");
});

router.get("/", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  try {
    res.render("home", {
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
