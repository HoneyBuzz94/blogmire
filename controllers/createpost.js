const router = require("express").Router();
const { User, Post } = require("../models");

router.get("/", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  res.render("createpost", { user_id: req.session.user_id });
});

module.exports = router;
