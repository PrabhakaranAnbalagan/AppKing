import React from "react";
import { Link } from "react-router-dom";
import TextArea from "../Common/TextArea";

const QuestionForm = (props) => {
  const { QuestionDesc, QuestionCategory } = props.question;
  return (
    <form onSubmit={props.onSubmit}>
      <div className="container col-md-6">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <br />
            <strong className="d-inline-block mb-2 text-primary">
            Question:
            </strong>
            <TextArea
              disabled = {false}
              id="QuestionDesc"
              label="QuestionDesc"
              name="QuestionDesc"
              cols="80"
              rows="10"
              onChange={props.onChange}
              value={QuestionDesc}
              error={props.error.QuestionDesc}
            />
             <br />
            <strong className="d-inline-block mb-2 text-primary">
            Question Category:
            </strong>
            <TextArea
              disabled = {false}
              id="QuestionCategory"
              label="QuestionCategory"
              name="QuestionCategory"
              cols="80"
              rows="3"
              onChange={props.onChange}
              value={QuestionCategory}
              error={props.error.QuestionCategory}
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

export default QuestionForm;
