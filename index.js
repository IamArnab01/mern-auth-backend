const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
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
app.use(express.json());
// route middlewares
app.use("/api", authRoute);

app.listen(3000, () => console.log("App Runnig on port 3000"));
