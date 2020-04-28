import React, { useState } from "react";
import AnswerForm from "./AnswerForm";
import { saveAnswer} from "../API/answerApi";
import { toast } from "react-toastify";

const ManageAnswer = (props) => {
  const question = props.location.state.question;
  const [error, setError] = useState("");
  const [answer, setAnswer] = useState(props.location.state.answer);

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
        toast.success("Answer saved.");
      });
  }

  return (
    <>
      <AnswerForm
        error={error}
        question={question}
        answer={answer}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageAnswer;
