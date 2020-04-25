import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://api.appking.online/api/questions/";

export function getQuestions() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getQuestionById(questionId) {
  return fetch(baseUrl + questionId)
    .then(handleResponse)
    .catch(handleError);
}

// export function saveAuthor(author) {
//   return fetch(baseUrl + (author.id || ""), {
//     method: author.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(author)
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }

// export function deleteAuthor(authorId) {
//   return fetch(baseUrl + authorId, { method: "DELETE" })
//     .then(handleResponse)
//     .catch(handleError);
// }
