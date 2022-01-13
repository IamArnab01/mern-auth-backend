const router = require("express").Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {
  // checking for already existing user
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist) {
    return res.status(400).send("User with the same email id already exists!");
  }
  // creating new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const _user = await user.save();
    res.status(201).send(_user);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
