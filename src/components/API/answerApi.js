import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://api.appking.online/api/answers/";

export function getAnswersByQuestion(questionId) {
  return fetch(baseUrl +  questionId)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((answers) => {
        if (answers.length === 0)
          throw new Error("answers not found: " + questionId);
        return answers;
      });
    })
    .catch(handleError);
}

export function saveAnswer(answer) {
  return fetch(baseUrl , {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(answer),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteAnswer(answerId) {
  debugger;
  return fetch(baseUrl + answerId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

// export function getAnswersById(answerId) {
//   return fetch(baseUrl + answerId)
//     .then((response) => {
//       if (!response.ok) throw new Error("Network response was not ok.");
//       return response.json().then((answer) => {
//         if (answer.length === 0)
//           throw new Error("answer not found: " + answerId);
//         return answer;
//       });
//     })
//     .catch(handleError);
// }
