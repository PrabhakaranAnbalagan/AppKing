import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Common/Home";
import Nav from "./components/Navigation/Nav";
import StarMatch from "./components/Star-Game/StarMatch";
import GitHubCard from "./components/Github-Card-Search/GitHubCard";
import NotFoundPage from "./components/Common/NotFoundPage";
import AboutPage from "./components/Common/AboutPage";
import Footer from "./components/Common/Footer";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/GitHubCard" component={GitHubCard}></Route>
          <Route path="/StarMatch" component={StarMatch}></Route>
          <Route path="/AboutPage" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
