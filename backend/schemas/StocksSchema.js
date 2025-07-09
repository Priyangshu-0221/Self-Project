const { Schema } = require("mongoose");

const StockSchema = new Schema({
  company: String,
  open: Number,
  high: Number,
  low: Number,
  prev_close: Number,
  price_change: String,
  volume: Number,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = { StockSchema };
