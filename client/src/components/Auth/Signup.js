import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth-service";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";


const initialState = {
  username: "",
  password: ""
};

function onChange(e) {
  premium.disabled = (e.target.checked);
};

const premium = {
  disabled: false,
};
const Signup = (props) => {
  const [regForm, setRegForm] = useState(initialState);
  const [regErrorMsg, setRegErrorMsg] = useState("");

  React.useEffect(() => {premium.disabled = false}, []) //will be fixed

  const service = new AuthService();
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { username, password } = regForm;

    service
      .signup(username, password, premium.disabled)
      .then((response) => {
        setRegForm(initialState);
        props.getUser(response);
      })
      .catch((error) => {
        const { message } = error.response.data;
        setRegErrorMsg(message);
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegForm({ ...regForm, [name]: value });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleFormSubmit}>
        <label className="label">Username:</label>
        <input
          className="input"
          type="text"
          name="username"
          value={regForm.username}
          onChange={handleChange}
        />

        <label className="label">Password:</label>
        <input
          className="input"
          type="password"
          name="password"
          value={regForm.password}
          onChange={handleChange}
        />
        <label className="label">
           CLICK TO REGISTER AS PREMIUM
          <Checkbox onChange={onChange} disabled={premium.disabled} />
        </label>
        <input type="submit" value="Signup" className="login-btn" />
      </form>
      <br />

      {regErrorMsg && <span style={{ color: "red" }}>{regErrorMsg}</span>}

      <p>
        Already have account?
        <Link to={"/"}> Login</Link>
      </p>
    </div>
  );
};

export default Signup;
