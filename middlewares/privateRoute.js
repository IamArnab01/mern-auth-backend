const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
  const token = req.header("jwtToken");
  if (!token) return res.status(401).send("Unauthorized access!");
  try {
    const isUserVerified = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.user = isUserVerified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
