const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    origin: { type: String, required: true },
    image: {type: String,required: false,},
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;