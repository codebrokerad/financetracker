const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const Stock = require("../models/stock.model");

const stock_api_key = process.env.STOCK_API_KEY;

router.get("/saveStocks/:symbol", async (req, res) => {
  const { symbol } =req.params;
  let query = Stock.find({}).select({ symbol: symbol });
  let IsSavedBefore = query.exec(function (err) {
  if (err) return next(err);
    res.send(true);
  });
  if (IsSavedBefore) {


  console.log("saved before" + symbol);  
  } else {

  const fetch_response = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${stock_api_key}`
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

  aNewStock.save();
  res.json(data);

}
});


router.get("/stocks", (req, res) => {
  Stock.find()
    .then((allTheStocks) => {
      res.status(200).json(allTheStocks);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/stocks/:symbol", (req, res) => {
  const { symbol } = req.params;

  let query = Stock.find({}).select({ "symbol": symbol });

  query.exec(function (err, someValue) {
      if (err) return next(err);
      res.send(someValue);
  });

});
module.exports = router;
