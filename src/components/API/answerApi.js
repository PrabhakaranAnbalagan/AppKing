import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://api.appking.online/answers/";

export function getAnswersByQuestion(questionId) {
  return fetch(baseUrl + questionId)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((answers) => {
        return answers;
      });
    })
    .catch(handleError);
}

export function saveAnswer(answer) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
    },
    body: JSON.stringify(answer),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteAnswer(answerId) {
  return fetch(baseUrl + answerId, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
    },
  })
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
