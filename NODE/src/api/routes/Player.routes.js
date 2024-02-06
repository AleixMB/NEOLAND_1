const { createPlayer } = require("../controllers/Player.controllers");

const PlayerRoutes = require("express").Router();

PlayerRoutes.post("/", createPlayer);

module.exports = PlayerRoutes;