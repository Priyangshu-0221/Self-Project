require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const database_url = process.env.MONGO_URL;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", //client side URL(basically frontend url)
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    credentials: true,
  })
);
app.use(bodyParser.json());
const HoldingModel = require("./model/HoldingModel");
const StockModel = require("./model/StockModel");
const OrderModel = require("./model/OrderModel");
const WatchListModel = require("./model/WatchListModel");
const UserModel = require("./model/UserModel");
const check = require("./middleware");

const dummydata = require("./data/StocksData");
const allholdings = require("./data/HoldingsData");

app.post("/newuser", async (req, res) => {
  let { username, password, email } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    return res.status(404).json({ message: "User already exists" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  let newUser = await UserModel.insertOne({
    username: username,
    email: email,
    password: hashedPassword,
  });
  await newUser.save();
  const token = jwt.sign({ id: newUser.insertId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
  res.json({ token });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(500).json({ message: "Invalid Credentials" });
  }
  const ismatch = await bcrypt.compare(password, user.password);
  if (!ismatch) {
    return res.status(500).json({ message: "Invalid Credentials" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
  res.json({ token, userId: user._id });
});

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
  try {
    let allstocks = await StockModel.find({});
    res.json(allstocks);
  } catch (error) {
    res.status(404).send("The resource doesn't exists..!!");
  }
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

app.post("/addorder", check, async (req, res) => {
  try {
    let newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
      owner: req.user.id,
    });
    await newOrder.save();
    res.send("New Order placed");
  } catch (error) {
    res.status(404).send("The resource doesn't exists..!!");
  }
});

app.post("/addwatchlist", check, async (req, res) => {
  try {
    const { id } = req.body;
    const stock = await StockModel.findById(id);
    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }
    const duplicate = await WatchListModel.findOne({
      company: stock.company,
      owner: req.user.id,
    });
    if (duplicate) {
      return res.status(404).json({ message: "Already in watchlist" });
    }

    const watchlistEntry = new WatchListModel({
      company: stock.company,
      open: stock.open,
      high: stock.high,
      low: stock.low,
      prev_close: stock.prev_close,
      price_change: stock.price_change,
      volume: stock.volume,
      owner: req.user.id,
    });
    await watchlistEntry.save();
    res.json({ message: "Added to watchlist" });
  } catch (err) {
    res.status(500).json({ message: "Failed to add to watchlist" });
  }
});

app.get("/allorders", check, async (req, res) => {
  try {
    const userId = req.user.id;
    let allorders = await OrderModel.find({ owner: userId });
    res.json(allorders);
  } catch (error) {
    res.status(404).send("The resource doesn't exist..!!");
  }
});

app.get("/allwatchlist", check, async (req, res) => {
  try {
    const userId = req.user.id;
    const allwatchlist = await WatchListModel.find({ owner: userId });
    res.json(allwatchlist);
  } catch (error) {
    res.status(500).send("Failed to fetch user's watchlist");
  }
});

app.delete("/sellitem", check, async (req, res) => {
  try {
    let userId = req.user.id;
    console.log(userId);
    let deleteditem = await OrderModel.deleteOne({ owner: userId });
    console.log("Stock Sold");
    res.send(deleteditem);
  } catch (error) {
    res.status(404).send("The resource doesn't exist..!!");
  }
});

app.delete("/removewatchlist", check ,async (req, res) => {
  try {
    let { uid } = req.body;
    const userId = req.user.id;
    let deleteditem = await WatchListModel.deleteOne({
      company: uid,
      owner: userId,
    });
    console.log("Item removed from watchlist!!");
    res.status(200).json({message : "Item removed"})  ;
  } catch (error) {
    res.status(404).send("The resource doesn't exist..!!");
  }
});

app.listen(PORT, async () => {
  console.log("SERVER STARTED");
  try {
    await mongoose.connect(database_url);
    console.log("DB CONNECTED SUCCESSFULLY");
  } catch (err) {
    console.log("Error in DB connection try again.....");
  }
});
