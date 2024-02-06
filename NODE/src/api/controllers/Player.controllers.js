const Player = require("../models/Player.model");

const createPlayer = async (req, res, next) => {
  try {
    await Player.syncIndexes();
    const customBody = {
      name: req.body?.name,
      lanePosition: req.body?.lanePosition,
    };
    const newPlayer = new Player(customBody);
    if (req.file) {
      newPlayer.image = req.file.path;
    } else {
      newPlayer.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
    };
    const savedPlayer = await newPlayer.save();
    return res
      .status(savedPlayer ? 200 : 404)
      .json(savedPlayer ? savedPlayer : "error al crear el player");
  } catch (error) {
    return res.status(404).json({
      error: "error catch create team",
      message: error.message,
    });
  }
};

module.exports = { createPlayer };