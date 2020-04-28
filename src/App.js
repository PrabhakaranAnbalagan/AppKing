import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Questionnaire/Home";
import Nav from "./components/Navigation/Nav";
import StarMatch from "./components/Star-Game/StarMatch";
import GitHubCard from "./components/Github-Card-Search/GitHubCard";
import NotFoundPage from "./components/Common/NotFoundPage";
import AboutPage from "./components/Common/AboutPage";
//import Footer from "./components/Common/Footer";
import QuestionsList from "./components/Questionnaire/QuestionsList";
import QuestionDetails from "./components/Questionnaire/QuestionDetails";
import ManageAnswer from "./components/Questionnaire/ManageAnswer";
import AnswerForm from "./components/Questionnaire/AnswerForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <ToastContainer autoClose={3000} hideProgressBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/QuestionsList" component={QuestionsList}></Route>
          <Route path="/QuestionDetails" component={QuestionDetails}></Route>
          <Route path="/ManageAnswer" component={ManageAnswer}></Route>
          <Route path="/AnswerForm" component={AnswerForm}></Route>
          <Route path="/GitHubCard" component={GitHubCard}></Route>
          <Route path="/StarMatch" component={StarMatch}></Route>
          <Route path="/AboutPage" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
