import { createReducer } from '@reduxjs/toolkit';

import { Poll } from './types';
import * as actions from './actions';

interface State {
	allPolls: Poll[];
	singlePoll: Poll | undefined;
	pending: boolean;
}

const initialState: State = {
	allPolls: [],
	singlePoll: undefined,
	pending: false,
};

export const pollsReducer = createReducer(initialState, (builder) => {
	builder.addCase(actions.fetchPolls, (state) => {
		state.pending = true;
	});
	builder.addCase(actions.fetchPollsSuccess, (state, action) => {
		state.allPolls = action.payload;
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
		state.allPolls = [...state.allPolls, action.payload];
	});
	builder.addCase(actions.addPollError, (state) => {
		state.pending = false;
	});
	builder.addCase(actions.fetchSinglePoll, (state) => {
		state.pending = true;	
	});
	builder.addCase(actions.fetchSinglePollSuccess, (state, action) => {
		console.log(action.payload);
		state.pending = false;
		state.singlePoll = action.payload;
	});
	builder.addCase(actions.fetchSinglePollError, (state) => {
		state.pending = false;
	});
	builder.addCase(actions.castVoteRequest, (state) => {
		state.pending = true;
	});
	builder.addCase(actions.castVoteSuccess, (state, action) => {
		console.log(action.payload); // correct payload, the patched poll
		state.pending = false;
		state.singlePoll = action.payload;
	});
	builder.addCase(actions.castVoteError, (state) => {
		state.pending = false;
	});
});
