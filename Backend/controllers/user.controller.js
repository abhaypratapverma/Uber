const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const userService = require("../services/user.service");

module.exports.registerUser = async (req, res, next) => {
  try {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure input
    const { fullname, email, password } = req.body;

    // Ensure `fullname` contains `firstname` and `lastname`
    if (!fullname || !fullname.firstname || !fullname.lastname) {
      return res.status(400).json({ error: "Full name must include first and last names." });
    }

    // Hash password
    const hashPassword = await userModel.hashPassword(password);

    // Create user object
    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
    });

    // Generate auth token
    const token = user.generateAuthToken();

    // Respond with user data and token
    res.status(201).json({ user, token });
  } catch (error) {
    // Handle unexpected errors
    console.error("Error in registerUser:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
