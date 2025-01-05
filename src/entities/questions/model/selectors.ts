import { createSelector } from 'reselect';

import { AppState } from 'app/providers/with-redux/types';

export const selectPolls = (state: AppState) => state.polls.polls;

export const pollsSelector = createSelector([selectPolls], (polls) => ({
	polls,
}));
