import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import AuthService from "../../services/auth-service";

const initialState = { username: "", password: "" };

const Login = (props) => {
  const [loginState, setLoginState] = useState(initialState);
  const [loginErrorMsg, setLoginErrorMsg] = useState("");

  const service = new AuthService();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { username, password } = loginState;

    service
      .login(username, password)
      .then((response) => {

        setLoginState(initialState);
        props.getUser(response);
      })
      .catch((error) => {
        const { message } = error.response.data;
        setLoginErrorMsg(message);
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginState({ ...loginState, [name]: value });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <label className="label">Username:</label>
        <input className="input"
          type="text"
          name="username"
          value={loginState.username}
          onChange={handleChange}
        />
        <label className="label">Password:</label>
        <input className="input"
          type="password"
          name="password"
          value={loginState.password}
          onChange={handleChange}
        />

        <input type="submit" value="Login" className="login-btn"/>
      </form>
      <br />

      {loginErrorMsg && <span style={{ color: "red" }}>{loginErrorMsg}</span>}

      <p>
        Welcome to Finance Tracker
        <Link to={"/signup"}> Signup</Link>
      </p>
    </div>
  );
};

export default Login;
