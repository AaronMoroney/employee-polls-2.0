import { URL } from 'shared/constants/URL';
import { fetchRequest } from 'shared/api/utils';

export const getPollsReq = () => {
	const requestUrl = `${URL}/polls`;
	const method = 'GET';

	return fetchRequest(requestUrl, method);
};

export const addPollsReq = (
	author: String,
	OptionOne: String,
	OptionTwo: String
) => {
	const requestUrl = `${URL}/polls`;
	const method = 'POST';
	const id = crypto.randomUUID();
	
	const data = {
		id,
		author,
		timestamp: Date.now(),
		optionOne: {
			votes: [],
			text: OptionOne,
		},
		optionTwo: {
			votes: [],
			text: OptionTwo,
		},
	};

	return fetchRequest(requestUrl, method, data);
};
