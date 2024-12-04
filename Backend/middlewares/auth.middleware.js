const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//This function, authUser, is a middleware in an Express.js application that authenticates users before granting access to protected routes. It checks for a valid token, ensures the token isn't blacklisted, and attaches the authenticated user to the req object for downstream usage.
module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    req.user = user; //Purpose: Attaches the authenticated user object to the req object so downstream middleware or route handlers can access it.

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
