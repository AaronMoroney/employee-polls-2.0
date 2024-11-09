import { URL } from "shared/constants/URL";
import { fetchRequest } from "shared/api/utils";

export const getQuestionsReq = () => {
  const requestUrl = `${URL}/questions`;
  const method = 'GET';

  return fetchRequest(requestUrl, method);
}