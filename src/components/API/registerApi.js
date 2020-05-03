const baseUrl = "http://api.appking.online/account/register";

export function registerUser(user) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch((error) => {
      //throw new Error(error);
      console.log(error);
    });
}

export async function handleResponse(response) {
  if (response.ok) return response;
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = { status: response.status, details: await response.text()} ;
    return error;
  }
  throw new Error("Network response was not ok.");
}
