import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth-service";
//import Checkbox from './Checkbox'

const initialState = {
  username: "",
  password: "",
  premium: { checked: false },
};

const Signup = (props) => {
  const [regForm, setRegForm] = useState(initialState);
  const [regErrorMsg, setRegErrorMsg] = useState("");

  const service = new AuthService();

  // Form submission handler
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { username, password, premium } = regForm;

    // Use the service.signup method to make a call to the back end and sign the user up
    service
      .signup(username, password, premium)
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

  // Change handler
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegForm({ ...regForm, [name]: value });
    // this.premium({ checked: event.target.checked });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={regForm.username}
          onChange={handleChange}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={regForm.password}
          onChange={handleChange}
        />
        {/* <label>
          <Checkbox
            checked={regForm.premium.checked}
            onChange={handleChange}
          />
          <span>Premium User</span>
        </label> */}
        <input type="submit" value="Signup" />
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
