import React, { useState, useEffect } from "react";
import { getAnswersByQuestion } from "../API/answerApi";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { toast } from "react-toastify";
import { deleteAnswer } from "../API/answerApi";

const QuestionDetails = (props) => {
  const {
    QuestionId,
    QuestionCategory,
    QuestionDesc,
  } = props.location.state.question;
  const question = props.location.state.question;
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const questionId = QuestionId;
    if (questionId) {
      getAnswersByQuestion(questionId).then((_answers) => setAnswers(_answers));
    }
  }, [QuestionId]);

  const submit = (answerId) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "",
      buttons: [
        {
          label: "Delete",
          onClick: () => {
            deleteAnswer(answerId).then(() => {
              props.history.push({
                pathname: "/QuestionsList",
              });
              toast.success("Answer Deleted.");
            });
          },
        },
        {
          label: "Cancel",
          onClick: () =>
            props.history.push({
              pathname: "/QuestionDetails",
              state: {
                question: { ...question },
              },
            }),
        },
      ],
    });
  };

  return (
    <>
      <nav className="col-md-12 text-left">
        <Link to="/QuestionsList" className="btn btn-primary">
          All Questions
        </Link>
      </nav>
      <br />
      <div className="card flex-md-row mb-4 box-shadow h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <strong className="d-inline-block mb-2 text-primary">
            {QuestionCategory}
          </strong>
          <h2>{QuestionDesc}</h2>
          <br />
          <strong>{answers.length} Answers: </strong>
          <br />
          {answers.map((answer) => (
            <div key={answer.AnswerId}>
              <textarea
                readOnly
                cols="100"
                rows="6"
                type="text"
                className="rounded"
                value={answer.AnswerDesc}
              />
              <Link
                className="btn btn-link"
                to={{
                  pathname: "/ManageAnswer",
                  state: {
                    question: { ...props.location.state.question },
                    answer: { ...answer },
                  },
                }}
              >
                Edit Answer
              </Link>
              <button
                className="btn btn-link"
                onClick={() => submit(answer.AnswerId)}
              >
                Delete Answer
              </button>
            </div>
          ))}
          <br />
          <nav className="col-md-12 text-left">
            <Link
              className="btn btn-primary"
              to={{
                pathname: "/ManageAnswer",
                state: {
                  question: { ...props.location.state.question },
                  answer: {
                    AnswerDesc: "",
                    QuestionId: QuestionId,
                  },
                },
              }}
            >
              Add a Answer
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default QuestionDetails;
