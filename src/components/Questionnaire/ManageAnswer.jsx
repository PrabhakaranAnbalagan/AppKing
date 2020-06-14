import React, { useState } from "react";
import AnswerForm from "./AnswerForm";
import { saveAnswer, deleteAnswer } from "../API/answerApi";
import { SuccessMessage } from "../Questionnaire/MessageService";
import DeleteAnswer from "./DeleteAnswer";

const ManageAnswer = (props) => {
  const question = props.location.state.question;
  const [error, setError] = useState("");
  const [answer, setAnswer] = useState(props.location.state.answer);
  const action = props.location.state.action;
  //const { UserName, AccessToken } = props.auth;

  function handleChange({ target }) {
    setAnswer({
      ...answer,
      [target.name]: target.value,
    });
  }

  function formIsValid() {
    let _errors = "";
    if (!answer.AnswerDesc) _errors = "Answer is required";

    setError(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    saveAnswer(answer).then(() => {
      props.history.push({
        pathname: "/QuestionDetails",
        state: {
          question: { ...question },
        },
      });
      SuccessMessage("Answer saved.");
    });
  }

  function handleDelete(event) {
    event.preventDefault();
    deleteAnswer(answer.AnswerId).then(() => {
      props.history.push({
        pathname: "/QuestionDetails",
        state: {
          question: { ...question },
        },
      });
      SuccessMessage("Answer Deleted.");
    });
  }

  if (action === "Save") {
    return (
      <AnswerForm
        error={error}
        question={question}
        answer={answer}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    );
  } else {
    return (
      <DeleteAnswer
        error={error}
        question={question}
        answer={answer}
        onChange={handleChange}
        onDelete={handleDelete}
      />
    );
  }
};

export default ManageAnswer;
