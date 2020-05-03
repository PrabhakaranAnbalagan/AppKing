import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://api.appking.online/questions/";

export function getQuestions() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getQuestionById(questionId) {
  return fetch(baseUrl + questionId)
    .then(handleResponse)
    .catch(handleError);
}

export function saveQuestion(question) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
    },
    body: JSON.stringify(question),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteQuestion(questionId) {
  return fetch(baseUrl + questionId, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
    },
  })
    .then(handleResponse)
    .catch(handleError);
}
