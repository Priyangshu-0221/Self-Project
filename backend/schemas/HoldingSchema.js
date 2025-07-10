const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = { HoldingsSchema };
