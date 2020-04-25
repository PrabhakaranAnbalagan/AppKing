import React, { useState, useEffect } from "react";
import { getAnswersByQuestion } from "../API/answerApi";
import { getQuestionById } from "../API/questionApi";
import { Link } from "react-router-dom";

const QuestionDetails = (props) => {
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const questionId = props.match.params.questionId;
    getQuestionById(questionId).then((_question) => setQuestion(_question));
  }, [props.match.params.questionId]);

  useEffect(() => {
    const questionId = props.match.params.questionId;
    if (questionId) {
      getAnswersByQuestion(questionId).then((_answers) => setAnswers(_answers));
    }
  }, [props.match.params.questionId]);

  return (
    <>
        <nav className="col-md-12 text-left">
          <Link to="/QuestionsList" className="btn btn-primary">
            All Questions
          </Link>
        </nav>
        <br/>
      <div className="card flex-md-row mb-4 box-shadow h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <strong className="d-inline-block mb-2 text-primary">
            {question.QuestionCategory}
          </strong>
          <h2>{question.QuestionDesc}</h2>
          <br />
          <strong>{answers.length} Answers: </strong>
          <br />
          {answers.map((answer) => (
            <div key={answer.AnswerId}>
              <p className="text-dark">{answer.AnswerDesc}</p>
              <hr className="col-md-10"/>
            </div>
          ))}
          <br />
          <nav className="col-md-12 text-right">
          <Link to="/QuestionsList" className="btn btn-primary">
            Add a Answer
          </Link>
        </nav>
        </div>
      </div>
    </>
  );
};

export default QuestionDetails;
