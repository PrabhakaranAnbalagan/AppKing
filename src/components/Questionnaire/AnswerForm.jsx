import React from "react";
import { Link } from "react-router-dom";
import TextArea from "../Common/TextArea";

const AnswerForm = (props) => {
  const { QuestionDesc } = props.question;
  const { AnswerDesc } = props.answer;
  return (
    <form onSubmit={props.onSubmit}>
      <div className="container col-md-6">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-primary">
              Question:
            </strong>
            <h2>{QuestionDesc}</h2>
            <br />
            <strong className="d-inline-block mb-2 text-primary">
              Answer:
            </strong>
            <TextArea
              disabled = {false}
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
                Save
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

export default AnswerForm;
