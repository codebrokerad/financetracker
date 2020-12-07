const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

// require the stock model !!!!
const Stock = require("../models/stock.model");

router.get("/stocks", async (req, res) => {
  const fetch_response = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=d228380d373feb4f78ddd08fa620a8bd`
  );
  const data = await fetch_response.json();

  let jsonObjectRes = JSON.stringify(data);
  let parsedJSON = JSON.parse(jsonObjectRes);

  const aNewStock = new Stock({
    name: parsedJSON[0].companyName,
    symbol: parsedJSON[0].symbol,
    price: parsedJSON[0].price,
    range: parsedJSON[0].range,
    description: parsedJSON[0].description,
  });

  // Attempt to save the new user to the database
  aNewStock.save();
  res.json(data);
});

module.exports = router;