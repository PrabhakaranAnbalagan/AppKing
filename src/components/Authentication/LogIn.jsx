import React from "react";
import "../Authentication/logIn.css";
import { Link } from "react-router-dom";
import { logInUser } from "../API/LogInApi";
import { ErrorMessage, SuccessMessage } from "../Questionnaire/MessageService";

const LogIn = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target["inputEmail"].value;
    const password = event.target["inputPassword"].value;
    const user = `grant_type=password&username=${email}&password=${password}`;
    logInUser(user).then((response) => {
      if (response.status !== 200) {
        ErrorMessage(` Error Details:              
                      ${response.details}

        `);
      } else {
        response.json().then((res) => {
          sessionStorage.setItem("accessToken", res.access_token);
          sessionStorage.setItem("userName", res.userName);
          props.handleSuccessAuth();
          props.history.push("/");
          SuccessMessage(`User ${res.userName} Login Successfully`);
        });
      }
    });
  };
  return (
    <div className="text-center">
      <form className="form-signin" type="submit" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please Log In</h1>
        <br />
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus={true}
        />
        <br />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <br />
        <button className="btn btn-primary">Log In</button>
        <Link to="/" className="btn btn-link">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default LogIn;
