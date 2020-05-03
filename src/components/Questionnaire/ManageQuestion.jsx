import React, { useState } from "react";
import { saveQuestion } from "../API/questionApi";
import { toast } from "react-toastify";
import QuestionForm from "./QuestionForm";

const ManageQuestion = (props) => {
  const [error, setError] = useState({});
  const [question, setQuestion] = useState(props.location.state.question);

  function handleChange({ target }) {
    setQuestion({
      ...question,
      [target.name]: target.value,
    });
  }

  function formIsValid() {
    let _errors = {};
    if (!question.QuestionDesc) _errors.QuestionDesc = "Question is required";
    if (!question.QuestionCategory) _errors.QuestionCategory = "Question Category is required";

    setError(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    saveQuestion(question).then(() => {
      props.history.push("/QuestionsList");
      toast.success("Question saved.", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
  }

  //   function handleDelete(event) {
  //     event.preventDefault();
  //     deleteQuestion(question.QuestionId).then(() => {
  //       props.history.push({
  //         pathname: "/QuestionDetails",
  //         state: {
  //           question: { ...question },
  //         },
  //       });
  //       toast.success("Question Deleted.", {
  //         position: toast.POSITION.TOP_CENTER,
  //       });
  //     });
  //   }

  return (
    <QuestionForm
      error={error}
      question={question}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default ManageQuestion;
