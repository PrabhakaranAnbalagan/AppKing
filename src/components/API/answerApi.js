import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://api.appking.online/api/answers/";

export function getAnswers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getAnswersByQuestion(questionId) {
  return fetch(baseUrl + questionId)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(answers => {
        if (answers.length === 0) throw new Error("answers not found: " + questionId);
        return answers; 
      });
    })
    .catch(handleError);
}

// export function saveCourse(course) {
//   return fetch(baseUrl + (course.id || ""), {
//     method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({
//       ...course,
//       // Parse authorId to a number (in case it was sent as a string).
//       authorId: parseInt(course.authorId, 10)
//     })
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }

// export function deleteCourse(courseId) {
//   return fetch(baseUrl + courseId, { method: "DELETE" })
//     .then(handleResponse)
//     .catch(handleError);
// }
