import { URL } from 'shared/constants/URL';
import { fetchRequest } from 'shared/api/utils';

export const addUsersReq = async({
  email, 
  password,
  avatarURL,
  answers,
  questions,
}: { 
  email: string; 
  password: string;
  avatarURL: string | null;
  answers: string[];
  questions: string[];
}) => {
  const requestUrl = `${URL}/signup`;
  const method = 'POST';

  return fetchRequest(requestUrl, method, {email, password, avatarURL, answers, questions});
}

export const loginReq = async({
  email, 
  password,
}: { 
  email: string; 
  password: string;
}) => {
  const requestUrl = `${URL}/login`;
  const method = 'POST';

  return fetchRequest(requestUrl, method, {email, password});
}
