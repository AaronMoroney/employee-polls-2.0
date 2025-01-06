import { URL } from 'shared/constants/URL';
import { fetchRequest } from 'shared/api/utils';

// #NOTE: 1: https://www.npmjs.com/package/json-server
// json-server does not support PATCH updates to nested arrays directly.
// To append a new pollID to the 'questions' array, we have to manually modify the array
// and send the updated array back to json-server to simulate the behavior.

export const getUsersReq = () => {
  const requestUrl = `${URL}/users`;
  const method = 'GET';

  return fetchRequest(requestUrl, method);
}

//TODO #1: Add custom middlewares/routes, to remove the need for this workaround
export const patchUsersReq = async(id: string, pollID: string ) => {
  const requestUrl = `${URL}/users/${id}`;

  const userResponse = await fetch(requestUrl);
  const userData = await userResponse.json();

  const updatedQuestions = Array.isArray(userData.questions)
    && [...userData.questions, pollID]

  const method = 'PATCH';

  const data = {
    questions: updatedQuestions
  };

  return fetchRequest(requestUrl, method, data);
}