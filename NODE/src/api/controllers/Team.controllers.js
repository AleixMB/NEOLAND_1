const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Team = require("../models/Team.model");
const Player = require("../models/Player.model");

const createTeam = async (req, res, next) => {
  let catchImg = req.file?.path;
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
      try{
        const savedTeam = await newTeam.save();
        if (savedTeam){
          return res.status(200).json(savedTeam)
        }
        else{
          return res
          .status(404)
          .json("No se ha podido guardar en la DB");
        };
      }
      catch (error) {
      return res.status(404).json("error general saved team");
      }
   } catch (error) {
    req.file?.path && deleteImgCloudinary(catchImg);
    return(
      res.status(404).json({
        message: "error en el creado del elemento", error: error,
      }) && next(error))
    };
};

//-----------------------------------------------------------------------------
//-----------------------------------Toggle------------------------------------
//-----------------------------------------------------------------------------

const togglePlayer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { players } = req.body;
    const teamById = await Team.findById(id);
    if (teamById) {
      const arrayIdPlayers = players.split(",");
      Promise.all( // resuelve todas las promesas que hay dentro, luego sigue..
        arrayIdPlayers.map(async (player, index) => {
          if (teamById.players.includes(player)) {
            try {
              await Team.findByIdAndUpdate(id, {//si ya existe dentro del array el mismo player, se borra
                $pull: { players: player },
              });

              try {
                await Player.findByIdAndUpdate(player, {// al existir un player tambien existe el team y lo tenemos que sacar con otro try catch anidado
                  $pull: { teams: id },
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update player",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update team",
                message: error.message,
              }) && next(error);
            }
          } else { // si no existe hacemos un push para meterlo , antes era pull si existia y ahora es push si no existe
            try {
              await Team.findByIdAndUpdate(id, {
                $push: { players: player },
              });
              try {
                await Player.findByIdAndUpdate(player, {
                  $push: { teams: id },
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update player",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update team",
                message: error.message,
              }) && next(error);
            }
          }
        })
      )
        .catch((error) => res.status(404).json(error.message))
        .then(async () => {
          return res.status(200).json({
            dataUpdate: await Team.findById(id).populate("players"),
          });
        });
    } else {
      return res.status(404).json("este equipo no existe");
    }
  } catch (error) {
    return (
      res.status(404).json({
        error: "error catch",
        message: error.message,
      }) && next(error)
    );
  }
};

//-----------------------------------------------------------------------------
//-----------------------------------Delete------------------------------------
//-----------------------------------------------------------------------------

const deleteTeam= async (req, res, next) => {
  try {
    const { id } = req.params;
    const team = await Team.findByIdAndDelete(id);
    if (team) {
      // lo buscamos para vr si sigue existiendo o no
      const finByIdTeam = await Team.findById(id);

      try {
        const test = await Movie.updateMany(
          { teams: id },
          { $pull: { teams: id } }
        );
        console.log(test);

        try {
          await User.updateMany(
            { teamsFav: id },
            { $pull: { teamsFav: id } }
          );

          return res.status(finByIdTeam ? 404 : 200).json({
            deleteTest: finByIdTeam ? false : true,
          });
        } catch (error) {
          return res.status(404).json({
            error: "error catch update User",
            message: error.message,
          });
        }
      } catch (error) {
        return res.status(404).json({
          error: "error catch update Player",
          message: error.message,
        });
      }
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

//-----------------------------------------------------------------------------
//-----------------------------------getById-----------------------------------
//-----------------------------------------------------------------------------
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const teamById = await Team.findById(id);
    if (teamById) {
      return res.status(200).json(teamById);
    } else {
      return res.status(404).json("no se ha encontrado el team");
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
//-----------------------------------------------------------------------------
//-----------------------------------getall------------------------------------
//-----------------------------------------------------------------------------

const getAll = async (req, res, next) => {
  try {
    const allTeam = await Team.find().populate("players");
    /** el find nos devuelve un array */
    if (allTeam.length > 0) {
      return res.status(200).json(allTeam);
    } else {
      return res.status(404).json("no se han encontrado players");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar - lanzado en el catch",
      message: error.message,
    });
  }
};

//-----------------------------------------------------------------------------
//-----------------------------------getByName---------------------------------
//-----------------------------------------------------------------------------
const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;

    /// nos devuelve un array de elementos
    const teamByName = await Team.find({ name });
    if (teamByName.length > 0) {
      return res.status(200).json(teamByName);
    } else {
      return res.status(404).json("no se ha encontrado");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar por nombre capturado en el catch",
      message: error.message,
    });
  }
};


module.exports = { createTeam , togglePlayer, deleteTeam, getByName, getAll, getById };