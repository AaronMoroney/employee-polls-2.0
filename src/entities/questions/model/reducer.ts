import { createReducer } from '@reduxjs/toolkit';

import { Poll } from './types';
import * as actions from './actions';

interface State {
	polls: Poll[];
	pending: boolean;
}

const initialState: State = {
	polls: [],
	pending: false,
};

export const pollsReducer = createReducer(initialState, (builder) => {
	builder.addCase(actions.fetchPolls, (state) => {
		state.pending = true;
	});
	builder.addCase(actions.fetchPollsSuccess, (state, action) => {
		state.polls = action.payload;
		state.pending = false;
	});
	builder.addCase(actions.fetchPollsError, (state) => {
		state.pending = false;
	});
	builder.addCase(actions.addPoll, (state) => {
		state.pending = true;
	});
	builder.addCase(actions.addPollSuccess, (state, action) => {
		state.pending = false;
		state.polls = [...state.polls, action.payload];
	});
	builder.addCase(actions.addPollError, (state) => {
		state.pending = false;
	});
});
