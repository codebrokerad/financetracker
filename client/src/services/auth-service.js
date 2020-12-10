import axios from "axios";


class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true, // indicates whether or not cross-site Access-Control requests should be made using credentials
    });
  }

  signup = (username, password, premium) => {
    return this.service
      .post("/api/signup", { username, password, premium })
      .then((response) => response.data);
  };

  login = (username, password) => {
    return this.service
      .post("/api/login", { username, password })
      .then((response) => response.data);
  };

  isAuthenticated = () => {
    return this.service
      .get("/api/loggedin")
      .then((response) => response.data);
  };

  logout = () => {
    return this.service
      .post("/api/logout", {})
      .then((response) => response.data);
  };
}

export default AuthService;
