import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import { getQuestions } from "../API/questionApi";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const QuestionsList = (props) => {
  const { UserName } = props.auth;
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions().then((response) => {
      if (response.status !== 200) {
        toast.error(` Error Details:              
                      ${response.data}

        `, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        response.data.then((res) => {
          setQuestions(res);
        });
      }
    });
  }, []);

  const handleAuthorization = (event) => {
    if (UserName === "") {
      event.preventDefault();
      toast.warn("Log In to Add a Question...", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <div>
      <br />
      <div className="row mb-2">
        <nav className="col-md-10 text-right">
          <Link
            to={{
              pathname: "/ManageQuestion",
              state: {
                question: {
                  QuestionDesc: "",
                  QuestionCategory: "",
                }
              },
            }}
            onClick={handleAuthorization}
            className="btn btn-primary"
          >
            Add a Question
          </Link>
        </nav>
      </div>
      <br />
      <div className="row mb-2">
        <div className="container col-md-10">
          {questions.map((question) => (
            <QuestionCard key={question.QuestionId} {...question} />
          ))}
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default QuestionsList;
