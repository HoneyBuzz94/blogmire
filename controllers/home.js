const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("home", {
      logged_in: req.session.logged_in,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
