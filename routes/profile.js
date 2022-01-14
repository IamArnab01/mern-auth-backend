const router = require("express").Router();
const privateRoute = require("../middlewares/privateRoute");
const User = require("../models/user");

router.get("/profile", privateRoute, async (req, res) => {
  const user = await User.findOne({ email: req.user.email });
  res.send({ user: user });
});

module.exports = router;
