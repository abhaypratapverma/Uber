const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res, next) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure input
    const { fullname, email, password } = req.body;

    // Ensure `fullname` contains `firstname` and `lastname`
    const isUserAlready = await userModel.findOne({ email });

    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exist' });
    }

    // Hash password
    const hashedPassword = await userModel.hashPassword(password);

    // Create user object
    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    // Generate auth token
    const token = user.generateAuthToken();

    // Respond with user data and token
    res.status(201).json({ user, token });
  
};

module.exports.loginUser = async (req, res, next) => {
  
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure input
    const { email, password } = req.body;

    // Find user by email
    const user = await userModel.findOne({email}).select('+password');

    // Ensure user exists
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);

    // Ensure password matches
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate auth token
    const token = user.generateAuthToken();

    res.cookie('token',token);

    // Respond with user data and token
    res.status(200).json({ user, token });
  
  }

module.exports.getUserProfile = async (req, res,next) => {
  res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res,next) => {
  res.clearCookie('token');
  const token = req.cookies.token || req.headers.authorization.split(' ')[1];

await blacklistTokenModel.create({token});

  res.status(200).json({message:'Logout successfully'});
}