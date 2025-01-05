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
}from './actions';
import { pollsSelector } from './selectors';

export function usePollState() {
	return useSelector(pollsSelector);
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
				},
				dispatch
			),
		[dispatch]
	);

	return boundActions;
}
