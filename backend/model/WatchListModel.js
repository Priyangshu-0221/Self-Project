const { model } = require("mongoose");

const { WacthListSchema } = require("../schemas/WatchListSchema");

const WatchListModel = model("watchlist", WacthListSchema);
module.exports = WatchListModel;
