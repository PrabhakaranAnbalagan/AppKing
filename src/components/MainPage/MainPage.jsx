import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "../Questionnaire/AppKingHome";
import StarMatch from "../Star-Game/StarMatch";
import GitHubCard from "../Github-Card-Search/GitHubCard";
import NotFoundPage from "../Common/NotFoundPage";
import AboutPage from "../Common/AboutPage";
//import Footer from "../Common/Footer";
import QuestionsList from "../Questionnaire/QuestionsList";
import QuestionDetails from "../Questionnaire/QuestionDetails";
import ManageAnswer from "../Questionnaire/ManageAnswer";
import AnswerForm from "../Questionnaire/AnswerForm";
import Register from "../Authentication/Register";
import LogIn from "../Authentication/LogIn";
import Nav from "../Navigation/Nav";
import ManageQuestion from "../Questionnaire/ManageQuestion";
import QuestionForm from "../Questionnaire/QuestionForm";

const MainPage = (props) => {
  const [auth, setAuth] = useState({
    AccessToken:
      sessionStorage.length === 0 ? "" : sessionStorage.getItem("accessToken"),
    UserName:
      sessionStorage.length === 0 ? "" : sessionStorage.getItem("userName"),
  });

  const handleSuccessAuth = () => {
    setAuth({
      AccessToken: sessionStorage.getItem("accessToken"),
      UserName: sessionStorage.getItem("userName"),
    });
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("userName");
    setAuth({
      AccessToken: "",
      UserName: "",
    });
  };

  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Nav {...props} auth={auth} handleLogOut = {handleLogOut} />
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} auth={auth} />}
        ></Route>
        <Route
          path="/QuestionsList"
          render={(props) => <QuestionsList {...props} auth={auth} />}
        ></Route>
        <Route
          path="/QuestionDetails"
          render={(props) => <QuestionDetails {...props} auth={auth} />}
        ></Route>
        <Route
          path="/ManageAnswer"
          render={(props) => <ManageAnswer {...props} auth={auth} />}
        ></Route>
        <Route path="/AnswerForm" component={AnswerForm}></Route>
        <Route
          path="/ManageQuestion"
          render={(props) => <ManageQuestion {...props} auth={auth} />}
        ></Route>
        <Route path="/QuestionForm" component={QuestionForm}></Route>
        <Route path="/Register" component={Register}></Route>
        <Route
          path="/LogIn"
          render={(props) => (
            <LogIn
              {...props}
              auth={auth}
              handleSuccessAuth={handleSuccessAuth}
            />
          )}
        ></Route>

        <Route path="/GitHubCard" component={GitHubCard}></Route>
        <Route path="/StarMatch" component={StarMatch}></Route>
        <Route path="/AboutPage" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default MainPage;
