import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import ProtectedRoute from "../Auth/ProtectedRoute";
import Dashboard from "../Stocks/Dashboard/Dashboard";
import PremiumStocks from "../PremiumStocks/PremiumStocks";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import AuthService from "../../services/auth-service";
import StockService from "../../services/stock-service";


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const service = new AuthService();
  React.useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = () => {
    if (loggedInUser === null) {
      service
        .isAuthenticated()
        .then((response) => {
          console.log(loggedInUser);
          setLoggedInUser(response);
        })
        .catch((err) => {
          setLoggedInUser(false);
        });
    }
  };
  React.useEffect(() => {
    const stockService = new StockService();
 
    let array = [
      "BNTX",
      "MRNA",
      "OZON",
      "DAO",
      "TWOU",
      "PLTR",
      "U",
      "LMND",
      "BIGC",
      "AMD",
      "QCOM",
      "MU",
      "UBER",
    ];
   //array.forEach((stock) => {
   //   stockService.saveStock(stock);
   //});
    /*setInterval(() => {
      let array = ["HLYN", "MRNA"];
      array.forEach((stock) => {
        stockService.saveStock(stock);
      });
    }, 3000000);*/
  }, []);

  const getLoggedInUser = (userObject) => {
    setLoggedInUser(userObject);
    console.log(userObject);
  };

  return loggedInUser ? (
    <section className="App">
      <Navbar userInSession={loggedInUser} getUser={getLoggedInUser} />
      <Switch>
        <ProtectedRoute
          user={loggedInUser}
          path="/stocks"
          component={Dashboard}
        />
      </Switch>
      <Switch>
        <ProtectedRoute
          user={loggedInUser}
          path="/premium"
          component={PremiumStocks}
        />
      </Switch>
    </section>
  ) : (
    <section className="App">
      <Navbar userInSession={loggedInUser} getUser={getLoggedInUser} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/signup"
          render={() => <Signup getUser={getLoggedInUser} />}
        />
        <Route
          exact
          path="/login"
          render={() => <Login getUser={getLoggedInUser} />}
        />
        <ProtectedRoute
          user={loggedInUser}
          path="/stocks"
          component={Dashboard}
        />
      </Switch>
    </section>
  );
}

export default App;
