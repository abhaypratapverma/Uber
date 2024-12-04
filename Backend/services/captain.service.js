const CaptainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  // Validate required fields
  if (!firstname || !lastname || !email || !password || !plate || !capacity || !vehicleType) {
    throw new Error("Missing required fields");
  }

  // Create a captain document in the database
  const captain = await CaptainModel.create({
    fullname:{
        firstname,
        lastname
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });

  return captain;
};
