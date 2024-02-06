const Team = require("../models/Team.model");

const createTeam = async (req, res, next) => {
  try {
    await Team.syncIndexes();
    const customBody = {
      name: req.body?.name,
      origin: req.body?.origin,
    };
    const newTeam = new Team(customBody);
      if (req.file) {
        newTeam.image = req.file.path;
      } else {
        newTeam.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
      };
    const savedTeam = await newTeam.save();
    return res
      .status(savedTeam ? 200 : 404)
      .json(savedTeam ? savedTeam : "error al crear el team");
  } catch (error) {
    return res.status(404).json({
      error: "error catch create team",
      message: error.message,
    });
  }
};

module.exports = { createTeam };