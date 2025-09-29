import * as React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import {
	fetchPolls,
	fetchPollsSuccess,
	fetchPollsError,
	addPoll,
	addPollSuccess,
	addPollError,
	fetchSinglePoll, 
	fetchSinglePollError, 
	fetchSinglePollSuccess,
	castVoteRequest, 
	castVoteSuccess, 
	castVoteError
} from './actions';
import { selectAllPolls, selectSinglePoll } from './selectors';
import { AppState } from 'app/providers/with-redux/types';

export function usePollState() {
	return useSelector((state: AppState) => ({
		polls: selectAllPolls(state),
		singlePoll: selectSinglePoll(state),
	}));
}

export function usePollActions() {
	const dispatch = useDispatch();

	const boundActions = React.useMemo(
		() =>
			bindActionCreators(
				{
					fetchPolls,
					fetchPollsSuccess,
					fetchPollsError,
					addPoll,
					addPollSuccess,
					addPollError,
					fetchSinglePoll, 
					fetchSinglePollError, 
					fetchSinglePollSuccess,
					castVoteRequest, 
					castVoteSuccess,
					castVoteError
				},
				dispatch
			),
		[dispatch]
	);

	return boundActions;
}
