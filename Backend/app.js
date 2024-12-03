const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());//in production here we pass only trusted given domains for use
app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
