import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import AuthService from "../../services/auth-service";

const Navbar = ({ userInSession, getUser }) => {
  const [loggedInUser, setLoggedInUser] = useState(userInSession);

  const service = new AuthService();

  useEffect(() => {
    setLoggedInUser(userInSession);
  }, [userInSession]);

  const logoutUser = () => {
    service.logout().then(() => {
      setLoggedInUser(null);
      getUser(null);
    });
  };

  if (loggedInUser) {
    return (
      <nav className="nav-style-loggedin">
        <span>Welcome, {loggedInUser.username}</span>
        <ul>
          {loggedInUser && loggedInUser.premium ? (
            <li>
              <Link to="/premium" style={{ textDecoration: "none" }}>
                Premium
              </Link>
            </li>
          ) : null}
          <li>
            <Link to="/stocks" style={{ textDecoration: "none" }}>
              Stocks
            </Link>
          </li>
          <li>
            <Link to="/">
              <button onClick={logoutUser}>Logout</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <div>
        <nav className="nav-style">
          <ul>
            <li>
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Signup
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default Navbar;
