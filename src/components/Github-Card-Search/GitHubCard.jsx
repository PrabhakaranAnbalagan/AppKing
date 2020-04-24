import React from "react";
import Cards from "./Cards";
import ProfileSearch from "./ProfileSearch";

class GitHubCard extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <>
        <div className="jumbotron">
          <ProfileSearch onSubmit={this.addNewProfile} />
        </div>
        <Cards profiles={this.state.profiles} />
      </>
    );
  }
}

export default GitHubCard;
