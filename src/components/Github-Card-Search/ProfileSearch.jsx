import React, { Component } from "react";
import axios from "axios";

class ProfileSearch extends Component {
  state = { userName: "" };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };
  render() {
    return (
      <div>
        <h2 className="p-3">View GitHub Users</h2>
        <form onSubmit={this.handleSubmit}>
          <input
          
            type="text"
            value={this.state.userName}
            onChange={(event) =>
              this.setState({ userName: event.target.value })
            }
            placeholder="GitHub username"
            required
          />
          <button className="btn btn-primary ml-3">view Details</button>
        </form>
      </div>
    );
  }
}

export default ProfileSearch;
