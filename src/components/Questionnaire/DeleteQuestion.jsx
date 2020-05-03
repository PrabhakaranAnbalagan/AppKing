import React from "react";
import { Link } from "react-router-dom";
import TextArea from "../Common/TextArea";

const DeleteQuestion = (props) => {
  const { QuestionDesc } = props.question;
  return (
    <form onSubmit={props.onDelete}>
      <div className="container col-md-6">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">           
            <strong className="d-inline-block mb-2 text-primary">
              Confirm to Delete the Question:
            </strong>
            <TextArea
              disabled = {true}
              id="QuestionDesc"
              label="QuestionDesc"
              name="QuestionDesc"
              cols="80"
              rows="10"
              onChange={props.onChange}
              value={QuestionDesc}
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

export default DeleteQuestion;