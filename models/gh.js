const mongoose = require("mongoose");

const ghSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    cargo: {
      type: String,
      default: "",
    },
    publicaciones: {
      type: Number,
      default: 0,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    gh: {
      type: Boolean,
      default: true,
    },
    equipo: {
      type: String,
      default: "",
    },
    listasIncentivos: {
        type: Array,
        default: [],
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("gh", ghSchema);