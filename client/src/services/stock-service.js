import axios from "axios";

class StockService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true, 
    });
  }

  getStocks = () => {
    return this.service
      .get("http://localhost:5001/api/stocks")
      .then((response) => response);
  };

  saveStock = async (symbol) => {
    const response = await this.service.get(
      `http://localhost:5001/api/saveStocks/${symbol}`
    );
    return response.data;
  };
}

export default StockService;
