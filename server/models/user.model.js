const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: String,
    password: String,
    premium: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
