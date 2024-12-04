const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Destructure input
  const { email, fullname, password, vehicle } = req.body;

  // Check if captain already exists
  const isCaptainAlready = await captainModel.findOne({ email });
  if (isCaptainAlready) {
    return res.status(400).json({ message: "Captain already exists" });
  }

  // Hash password
  const hashedPassword = await captainModel.hashPassword(password);

  // Create captain object using the service
  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  // Generate auth token
  const token = captain.generateAuthToken();

  // Respond with captain data and token
  res.status(201).json({ captain, token });
};
