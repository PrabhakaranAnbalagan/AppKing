import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav-scroller py-1 mb-2">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/QuestionsList">All Questions</Link>
            </li>
            <li>
              <Link to="/GitHubCard">Git-Search</Link>
            </li>
            <li>
              <Link to="/StarMatch">Game</Link>
            </li>
            <li>
              <Link to="/AboutPage">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
