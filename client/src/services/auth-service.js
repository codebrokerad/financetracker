import axios from "axios";

// Contains all the methods and also we need to use the create method of axios to build a new instance
class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true, // indicates whether or not cross-site Access-Control requests should be made using credentials
    });
  }

  // Method to use in our SignUp component
  signup = (username, password, premium) => {
    return this.service
      .post("http://localhost:5001/api/signup", { username, password, premium })
      .then((response) => response.data);
  };

  // Method to use in our Login component
  login = (username, password) => {
    return this.service
      .post("http://localhost:5001/api/login", { username, password })
      .then((response) => response.data);
  };

  // Method to use to see if user is authenticated
  isAuthenticated = () => {
    return this.service
      .get("http://localhost:5001/api/loggedin")
      .then((response) => response.data);
  };

  // Method to use for logging our user out
  logout = () => {
    return this.service
      .post("http://localhost:5001/api/logout", {})
      .then((response) => response.data);
  };
}

export default AuthService;
