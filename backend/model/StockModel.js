const { model } = require("mongoose");

const { StockSchema } = require("../schemas/StocksSchema");

const StockModel = model("stock", StockSchema);
module.exports = StockModel;
