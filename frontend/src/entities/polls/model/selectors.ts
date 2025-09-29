import { createSelector } from 'reselect';

import { AppState } from 'app/providers/with-redux/types';

export const selectAllPolls = createSelector(
	[(state: AppState) => state.polls],
	(polls) => polls.allPolls
);

export const selectSinglePoll = createSelector(
	[(state: AppState) => state.polls],
	(polls) => polls.singlePoll
);
