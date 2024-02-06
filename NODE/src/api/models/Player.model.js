
const mongoose = require("mongoose");
//const { upload,} = requiere("../../middleware/files.middleware")
const Schema = mongoose.Schema;


const playerSchema = new Schema(
  {
    name: { type: String, required: false, unique: false },
    lanePosition: {type: String, enum: ["top", "jungler", "mid", "adc", "support"], required: false,},
    image: {type: String,required: false},
    team: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);
const Player = mongoose.model("Player", playerSchema);

module.exports = Player;