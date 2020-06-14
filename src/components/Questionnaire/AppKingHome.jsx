/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionCard from "./QuestionCard";
import SideBar from "./SideBar";
import { getQuestions } from "../API/questionApi";
import { ErrorMessage } from "../Questionnaire/MessageService";

const Home = (props) => {
  const { UserName } = props.auth;
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions().then((response) => {
      if (response.status !== 200) {
        ErrorMessage(
          ` Error Details:              
                      ${response.data}

        `);
      } else {
        response.data.then((res) => {
          setQuestions(res);
        });
      }
    });
  }, []);

  return (
    <div className="container col-md-12">
      <div className="jumbotron p-3 p-md-5 text-white rounded">
        <h1 className="display-4 font-italic">Developer's Kingdom</h1>
        <p className="lead my-3">
          A place where you can find answers for Technical Questions...
        </p>
        <Link to="/AboutPage" className="btn btn-primary">
          About
        </Link>
      </div>
      <br />
      <div className="row mb-2">
        <nav className="col-md-7 text-left">
          {(UserName !== "") ?<p className="lead my-3">Welcome, {UserName}</p> :
          <p></p>}
        </nav>
        <nav className="col-md-3 text-right">
          <Link to="/QuestionsList" className="btn btn-primary">
            All Questions
          </Link>
        </nav>
      </div>
      <br />
      <div className="row mb-2">
        <div className="container col-md-10">
          {questions.slice(0, 10).map((question) => (
            <QuestionCard key={question.QuestionId} {...question} />
          ))}
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
