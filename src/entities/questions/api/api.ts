import { URL } from 'shared/constants/URL';
import { fetchRequest } from 'shared/api/utils';

// #NOTE: 1: https://www.npmjs.com/package/json-server
// json-server does not support PATCH updates to nested arrays directly.
// To append a new vote to the array, we have to manually modify the array
// and send the updated array back to json-server to simulate the behavior.

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

export const getSinglePollReq = (id: string) => {
	const requestUrl = `${URL}/polls/${id}`;
	const method = 'GET';

	return fetchRequest(requestUrl, method);
};

//TODO #1: Add custom middlewares/routes, to remove the need for this workaround
export const castVoteReq = async(
	option: string,
	pollId: string,
	authUserId: string
) => {
	const requestUrl = `${URL}/polls/${pollId}`;

	const pollsResponse = await fetch(requestUrl);
	const pollsData = await pollsResponse.json();

	const updatedVotes = [...pollsData[option].votes, authUserId];

	const patchData = {
		[option]: {
		  ...pollsData[option],
		  votes: updatedVotes,
		},
	  };

	const method = 'PATCH';

	return fetchRequest(requestUrl, method, patchData);
}
