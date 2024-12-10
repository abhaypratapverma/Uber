const mapsService = require("../services/maps.service");
const { validationResult } = require("express-validator");
module.exports.getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
  const { address } = req.querry;
  try {
    const coordinates = await mapsService.getAddressCoordinate(address);
    res.status(200).json(coordinates);
  } catch (error) {
    next(error);
    res.status(404).json({ message: "Coordinates not found" });
  }
};
module.exports.getDistanceTime = async(req, res, next) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    const { origin, destination } = req.querry;
    try {
        const distanceTime = await mapsService.getDistanceTime(origin, destination);
        res.status(200).json(distanceTime);
    } catch (error) {
        next(error);
        res.status(404).json({ message: "Distance and time not found" });
    }
};

module.exports.getAutoCompleteSuggestions = async(req, res, next) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    const { input } = req.querry;
    try {
        const suggestions = await mapsService.getAutoCompleteSuggestions(input);
        res.status(200).json(suggestions);
    } catch (error) {
        next(error);
        res.status(404).json({ message: "Suggestions not found" });
    }
};