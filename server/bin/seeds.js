const mongoose = require("mongoose");

const Stock = require("../models/stock.model");
const DB_NAME = 'stocksdb';


mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const stocks = [
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AMZN",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },
  {
    companyName: "Apple Inc",
    symbol: "AAPL",
    image: "https://financialmodelingprep.com/image-stock/AAPL.png",
    price: "124.145",
    range: "53.1525-137.98",
    website: "https://www.apple.com/",
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.
  },

];


Stock.create(stocks)
    .then((stocksFromDB) => {
        console.log(`Created ${stocksFromDB.length} drugs`);
        mongoose.connection.close();
    })
    .catch((err) =>
        console.log(`An error occurred while getting stocks from the DB: ${err}`)
    );