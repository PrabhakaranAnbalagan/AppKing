import React from "react";
import { Link } from "react-router-dom";

const QuestionCard = (props) => {
  return (
    <div className="card flex-md-row mb-4 box-shadow h-md-250">
      <div className="card-body d-flex flex-column align-items-start">
        <strong className="d-inline-block mb-2 text-primary">
          {props.QuestionCategory}
        </strong>
        <h3 className="mb-0">
          <Link
            className="text-dark"
            to={{
              pathname: "/QuestionDetails",
              state: {
                question: { ...props },
              },
            }}
          >
            {props.QuestionDesc}
          </Link>
        </h3>
        <br />
        <Link
          to={{
            pathname: "/QuestionDetails",
            state: {
              question: { ...props },
            },
          }}
        >
          View Answer
        </Link>
      </div>
    </div>
  );
};

export default QuestionCard;
