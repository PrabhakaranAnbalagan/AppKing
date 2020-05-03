import React, { useState, useEffect } from "react";
import { getAnswersByQuestion } from "../API/answerApi";
import { Link } from "react-router-dom";
//import DeletePopUp from '../Common/DeletePopUp'; // If needed Delete Popup
import { toast } from "react-toastify";

const QuestionDetails = (props) => {
  const {
    QuestionId,
    QuestionCategory,
    QuestionDesc,
  } = props.location.state.question;
  const { UserName } = props.auth;
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const questionId = QuestionId;
    if (questionId) {
      getAnswersByQuestion(questionId).then((_answers) => setAnswers(_answers));
    }
  }, [QuestionId]);

  const handleAuthorization = (event) => {
    if (UserName === "") {
      event.preventDefault();
      toast.warn(`Log In to ${event.target.name} a Answer...`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <br />
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
                style={{ backgroundColor: "white" }}
                className="form-control"
                value={answer.AnswerDesc}
              />
              <Link
                className="btn btn-link"
                name="Edit"
                onClick={handleAuthorization}
                to={{
                  pathname: "/ManageAnswer",
                  state: {
                    question: { ...props.location.state.question },
                    answer: { ...answer },
                    action: "Save",
                  },
                }}
              >
                Edit Answer
              </Link>
              <Link
                className="btn btn-link"
                name="Delete"
                onClick={handleAuthorization}
                to={{
                  pathname: "/ManageAnswer",
                  state: {
                    question: { ...props.location.state.question },
                    answer: { ...answer },
                    action: "Delete",
                  },
                }}
              >
                Delete Answer
              </Link>
              {/* <button
                className="btn btn-link"
                onClick={() => DeletePopUp(answer.AnswerId, props)}
              >
                Delete Answer
              </button> */}
              <hr />
            </div>
          ))}
          <br />
          <nav className="col-md-12 text-left">
            <Link
              className="btn btn-primary"
              name="Add"
              onClick={handleAuthorization}
              to={{
                pathname: "/ManageAnswer",
                state: {
                  question: { ...props.location.state.question },
                  answer: {
                    AnswerDesc: "",
                    QuestionId: QuestionId,
                  },
                  action: "Save",
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
