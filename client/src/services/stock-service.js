import axios from "axios";

// Contains all the methods and also we need to use the create method of axios to build a new instance
class StockService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true, // indicates whether or not cross-site Access-Control requests should be made using credentials
    });
  }

  // GetAllStock
  //getStocks = async () => {
  //  const response = await this.service.get("http://localhost:5001/api/stocks");
  //  return response.data;
  //};
  getStocks = () => {
    return this.service
      .get("http://localhost:5001/api/stocks")
      .then((response) => response);
  };

  // Save Stock by Symbol
  saveStock = async (symbol) => {
    const response = await this.service.get(
      `http://localhost:5001/api/saveStocks/${symbol}`
    );
    return response.data;
  };
}

export default StockService;
