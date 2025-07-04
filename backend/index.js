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
    origin: "http://localhost:3000", // your frontend URL
    methods: "GET",
    credentials: true,
  })
);
app.use(bodyParser.json());
const HoldingModel = require("./model/HoldingModel");
const PositionModel = require("./model/PositionModel");

// app.get("/addHoldings", async (req, res) => {
//   let holdingsDummy = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];
//   holdingsDummy.forEach((holdingItem) => {
//     let newHolding = new HoldingModel({
//       name: holdingItem.name,
//       qty: holdingItem.qty,
//       avg: holdingItem.avg,
//       price: holdingItem.price,
//       net: holdingItem.net,
//       day: holdingItem.day,
//     });
//     newHolding.save();
//   });
//   res.send("Data Inserted");
// });

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
app.get("/allpositions", async (req, res) => {
  let allposition = await PositionModel.find();
  res.json(allposition);
});

app.listen(PORT, async () => {
  console.log("SERVER STARTED");
  try {
    await mongoose.connect(database_url);
    console.log("DB CONNECTED SUCCESSFULLY");
  } catch (err) {
    console.log(err);
  }
});
