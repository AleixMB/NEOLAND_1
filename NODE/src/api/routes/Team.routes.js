const { upload } = require("../../middleware/files.middleware");
const { createTeam, togglePlayer, getById, getAll, getByName, deleteTeam,  } = require("../controllers/Team.controllers");

const TeamRoutes = require("express").Router();

TeamRoutes.post("/", createTeam, upload.single("image"));
TeamRoutes.patch("/add/:id", togglePlayer);
TeamRoutes.delete("/:id", deleteTeam);
TeamRoutes.get("/:id", getById);
TeamRoutes.get("/", getAll);
TeamRoutes.get("/byName/:name", getByName);

module.exports = TeamRoutes;