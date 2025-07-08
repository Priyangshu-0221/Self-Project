const { Schema } = require("mongoose");

const WacthListSchema = new Schema({
  company: {
    type : String,
    unique : true,
  },
  open: Number,
  high: Number,
  low: Number,
  prev_close: Number,
  price_change: String,
  volume: Number,
});

module.exports = { WacthListSchema };
