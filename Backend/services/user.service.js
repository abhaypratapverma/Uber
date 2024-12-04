const userModel = require("../models/user.model");

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
  try {
    // Validate input
    if (!firstname || !lastname || !email || !password) {
      throw new Error("All fields (firstname, lastname, email, password) are required");
    }

    // Create user
    const user = await userModel.create({
      fullname: { firstname, lastname },
      email,
      password,
    });

    return user;
  } catch (error) {
    console.error("Error in createUser:", error.message);
    throw new Error("Failed to create user: " + error.message);
  }
};
