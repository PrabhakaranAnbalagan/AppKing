import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import { getQuestions } from "../API/questionApi";
import SideBar from "./SideBar";

import { Link } from "react-router-dom";

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions().then((_questions) => setQuestions(_questions));
  }, []);
  return (
    <div>
      <br />
      <div className="row mb-2">
        <nav className="col-md-10 text-right">
          <Link to="/QuestionsList" className="btn btn-primary">
            Add a Question
          </Link>
        </nav>
      </div>
      <br />
      <div className="row mb-2">
        <div className="container col-md-10">
          {questions.map((question) => (
            <QuestionCard key={question.QuestionId} {...question} />
          ))}
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default QuestionsList;
