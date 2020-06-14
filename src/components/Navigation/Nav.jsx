import React from "react";
import { Link } from "react-router-dom";
import { SuccessMessage } from "../Questionnaire/MessageService";

const Nav = (props) => {
  const { UserName } = props.auth;
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/QuestionsList">
              All Questions
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/GitHubCard">
              Git-Search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/StarMatch">
              Game
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/AboutPage">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto order-0">
        <Link className="navbar-brand mx-auto" to="/">
          <strong>AppKing</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".dual-collapse2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          {UserName === "" ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/LogIn">
                  Log In
                </Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  SuccessMessage("Log Out Successful");
                  props.handleLogOut();
                }}
              >
                Log Out
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
