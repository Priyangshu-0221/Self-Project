const { Schema } = require("mongoose");

const WacthListSchema = new Schema({
  company: String,
  open: Number,
  high: Number,
  low: Number,
  prev_close: Number,
  price_change: String,
  volume: Number,
});

module.exports = { WacthListSchema };
