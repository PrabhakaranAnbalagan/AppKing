import React from "react";
import "../Authentication/logIn.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../API/registerApi";

const Register = (props) => {
  function validatePassword(password, confirm_password) {
    if (password !== confirm_password) {
      toast.warn("Passwords Don't Match", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target["inputEmail"].value;
    const password = event.target["inputPassword"].value;
    const confirmPassword = event.target["confirmPassword"].value;
    if (!validatePassword(password, confirmPassword)) return;
    const user = {
      email: email,
      password: password,
      confirmPassword,
    };
    registerUser(user).then((response) => {
      if (response.status !== 200) {
        const { ModelState } = JSON.parse(response.details);
        var resilt = Object.entries(ModelState).map(([key, val]) => val);
        toast.error(` Error Details:              
                      ${resilt[0]}

        `, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        props.history.push("/LogIn");
        toast.success(
          `User ${user.email} Registed Successfully. Please Login with Registered User details`
          , {
            position: toast.POSITION.TOP_CENTER,
          });
      }
    });
  };

  return (
    <div className="text-center">
      <form className="form-signin" type="submit" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
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
          name="Password"
          required
        />
        <br />
        <label htmlFor="confirmPassword" className="sr-only">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="form-control"
          placeholder="confirm Password"
          name="confirmPassword"
          required
        />
        <br />
        <button className="btn btn-primary">Register</button>
        <Link to="/" className="btn btn-link">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default Register;
