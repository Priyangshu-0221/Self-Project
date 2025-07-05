require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const database_url = process.env.MONGO_URL;

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", //client side URL(basically frontend url)
    methods: "GET",
    credentials: true,
  })
);
app.use(bodyParser.json());
const HoldingModel = require("./model/HoldingModel");
const StockModel = require("./model/StockModel");
const dummydata = require("./data/StocksData");
const allholdings = require("./data/HoldingsData");
// const PositionModel = require("./model/PositionModel");

app.get("/addHoldings", async (req, res) => {
  let holdingsDummy = allholdings;
  holdingsDummy.forEach((holdingItem) => {
    let newHolding = new HoldingModel({
      name: holdingItem.name,
      qty: holdingItem.qty,
      avg: holdingItem.avg,
      price: holdingItem.price,
      net: holdingItem.net,
      day: holdingItem.day,
    });
    newHolding.save();
  });
  res.send("Data Inserted");
});

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true
//   },
//   {
//     product: "CNC",
//     name: "TATACHEM",
//     qty: 4,
//     avg: 1265.50,
//     price: 1242.10,
//     net: "-2.01%",
//     day: "-0.75%",
//     isLoss: true
//   },
//   {
//     product: "CNC",
//     name: "ITC",
//     qty: 10,
//     avg: 422.30,
//     price: 435.90,
//     net: "+3.22%",
//     day: "+0.64%",
//     isLoss: false
//   },
//   {
//     product: "CNC",
//     name: "RELIANCE",
//     qty: 3,
//     avg: 2950.00,
//     price: 2920.00,
//     net: "-1.02%",
//     day: "-0.50%",
//     isLoss: true
//   }
// ];
//   tempPositions.forEach((item) => {
//     let newPosition = new PositionModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done!");
// });

app.get("/addstocks", async (req, res) => {
  //to insert stocks data into the dataset
  let dummyStocks = dummydata;
  dummyStocks.forEach((stock) => {
    let newStock = new StockModel({
      company: stock.company,
      open: stock.open,
      high: stock.high,
      low: stock.low,
      prev_close: stock.prevclose,
      price_change: stock.price_change,
      volume: stock.volume,
    });
    newStock.save();
  });
  res.send("Stocks Data inserted in the database");
});

app.get("/allstocks", async (req, res) => {
  let allstocks = await StockModel.find({});
  res.json(allstocks);
});

app.get("/allholdings-stream", (req, res) => {
  try {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders(); // send headers immediately

    const intervalId = setInterval(async () => {
      const allholdings = await HoldingModel.find();
      const randomholding = allholdings.map((stock) => {
        const fluctuation = (Math.random() - 0.5) * 4;
        const newPrice = parseFloat((stock.price + fluctuation).toFixed(2));
        const dayChange = parseFloat(((Math.random() - 0.5) * 2).toFixed(2));
        const isLoss = dayChange < 0;
        const netChange = ((newPrice - stock.avg) / stock.avg) * 100;
        return {
          ...stock.toObject(),
          price: newPrice,
          net: `${netChange >= 0 ? "+" : ""}${netChange.toFixed(2)}%`,
          day: `${dayChange >= 0 ? "+" : ""}${dayChange.toFixed(2)}%`,
          isLoss,
        };
      });
      res.write(`data: ${JSON.stringify(randomholding)}\n\n`);
    }, 1000);

    req.on("close", () => {
      clearInterval(intervalId);
      console.log("SSE connection closed");
    });
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// app.get("/allpositions", async (req, res) => {
//   let allposition = await PositionModel.find();
//   res.json(allposition);
// });

app.listen(PORT, async () => {
  console.log("SERVER STARTED");
  try {
    await mongoose.connect(database_url);
    console.log("DB CONNECTED SUCCESSFULLY");
  } catch (err) {
    console.log(err);
  }
});
