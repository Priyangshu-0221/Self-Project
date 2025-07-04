const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingSchema");

const HoldingModel = model("holding", HoldingsSchema);

module.exports = HoldingModel;
