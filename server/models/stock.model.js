const { Schema, model } = require("mongoose");

const stockSchema = new Schema(
  {
    name: String,
    symbol: String,
    price: String,
    range: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Stock", stockSchema);