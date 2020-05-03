import React from "react";
import { Link } from "react-router-dom";
import TextArea from "../Common/TextArea";

const DeleteAnswer = (props) => {
  const { AnswerDesc } = props.answer;
  return (
    <form onSubmit={props.onDelete}>
      <div className="container col-md-6">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">           
            <strong className="d-inline-block mb-2 text-primary">
              Confirm to Delete the Answer:
            </strong>
            <TextArea
              disabled = {true}
              id="AnswerDesc"
              label="AnswerDesc"
              name="AnswerDesc"
              cols="80"
              rows="10"
              onChange={props.onChange}
              value={AnswerDesc}
              error={props.error}
            />
            <br />
            <div>
              <button type="submit" className="btn btn-primary">
                Delete
              </button>
              <Link
                className="btn btn-link"
                to={{
                  pathname: "/QuestionDetails",
                  state: {
                    question: { ...props.question },
                  },
                }}
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DeleteAnswer;