const { upload } = require("../../middleware/files.middleware");
const { createPlayer, toggleTeam, deletePlayer, getAll, getByName, getById } = require("../controllers/Player.controllers");

const PlayerRoutes = require("express").Router();

PlayerRoutes.post("/", createPlayer, upload.single("image"));
PlayerRoutes.patch("/add/:id", toggleTeam);
PlayerRoutes.delete("/:id", deletePlayer);
PlayerRoutes.get("/:id", getById);
PlayerRoutes.get("/", getAll);
PlayerRoutes.get("/byName/:name", getByName);

module.exports = PlayerRoutes;