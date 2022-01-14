const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/profile");

// spinnig the express app
const app = express();
// dotenv config
dotenv.config();

// connecting to database
mongoose.connect(
  process.env.DATABASE_CONNECTION,
  { useNewUrlParser: true },
  () => console.log("db connected")
);

// middlewares
app.use(cors());
app.use(express.json());
// route middlewares
app.use("/api", authRoutes);
app.use("/api", postRoutes);

app.listen(3000, () => console.log("App Runnig on port 3000"));
