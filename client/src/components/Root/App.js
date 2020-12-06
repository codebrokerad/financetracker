import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import ProtectedRoute from "../Auth/ProtectedRoute";
import Dashboard from "../Stocks/Dashboard";

import Navbar from "../Navbar/Navbar";
import AuthService from "../../services/auth-service";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const service = new AuthService();

  // Function to help fetch a logged in user
  const fetchUser = () => {
    if (loggedInUser === null) {
      service
        .isAuthenticated()
        .then((response) => {
          setLoggedInUser(response);
        })
        .catch((err) => {
          setLoggedInUser(false);
        });
    }
  };

  // Function to help get the loggedIn user
  const getLoggedInUser = (userObject) => {
    setLoggedInUser(userObject);
  };

  // Run to check if user is authenticated
  fetchUser();

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
    </section>
  ) : (
    <section className="App">
      <Navbar userInSession={loggedInUser} getUser={getLoggedInUser} />

      <Switch>
        <Route
          exact
          path="/signup"
          render={() => <Signup getUser={getLoggedInUser} />}
        />
        <Route
          exact
          path="/"
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
