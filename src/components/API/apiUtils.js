export async function handleResponse(response) {
  if (response.ok) {
    const responseDetails = {
      status: response.status,
      data: response.json(),
    };
    return responseDetails;
  } else if (response !== null || response.status !== undefined) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    const errorDetails = {
      status: response.status,
      data: error,
    };
    return errorDetails;
  }
  throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
