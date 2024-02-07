const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PlayerSchema = new Schema(
  {
    name: { type: String, required: false, unique: false },
    lanePosition: {type: String, enum: ["top", "jungler", "mid", "adc", "support"], required: false,},
    image: {type: String, required: false},
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);
const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;