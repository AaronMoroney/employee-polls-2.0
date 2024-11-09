import { URL } from 'shared/constants/URL';
import { fetchRequest } from 'shared/api/utils';

export const getUsersReq = () => {
  const requestUrl = `${URL}/users`;
  const method = 'GET';

  return fetchRequest(requestUrl, method);
}