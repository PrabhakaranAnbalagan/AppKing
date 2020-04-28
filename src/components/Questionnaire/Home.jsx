/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionCard from "./QuestionCard";
import SideBar from "./SideBar";
import { getQuestions } from "../API/questionApi";

const Home = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions().then((_questions) => setQuestions(_questions));
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
        <nav className="col-md-10 text-right">
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
