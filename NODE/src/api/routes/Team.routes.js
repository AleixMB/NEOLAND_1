const { createTeam } = require("../controllers/Team.controllers");

const TeamRoutes = require("express").Router();

TeamRoutes.post("/", createTeam);

module.exports = TeamRoutes;