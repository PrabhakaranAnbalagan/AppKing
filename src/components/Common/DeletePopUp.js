import { toast } from "react-toastify";
import { deleteAnswer } from "../API/answerApi";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const DeletePopUp = (answerId, props) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "",
      buttons: [
        {
          label: "Delete",
          onClick: () => {
            deleteAnswer(answerId).then(() => {
              props.history.push({
                pathname: "/QuestionsList",
              });
              toast.success("Answer Deleted.", {
                position: toast.POSITION.TOP_CENTER,
              });
            });
          },
        },
        {
          label: "Cancel",
          onClick: () =>
            props.history.push({
              pathname: "/QuestionDetails",
              state: {
                question: { ...props.location.state.question },
              },
            }),
        },
      ],
    });
  };

  export default DeletePopUp;