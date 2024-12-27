import { createReducer } from '@reduxjs/toolkit';

import * as actions from './actions';

interface State {
	message: string;
	severity: string;
	isOpen: boolean;
}

const initialState: State = {
	message: '',
	severity: '',
	isOpen: false,
};

export const alertReducer = createReducer(initialState, (builder) => {
	builder.addCase(actions.showAlert, (state, action) => {
		state.message = action.payload.message;
		state.severity = action.payload.severity;
		state.isOpen = true;
	});
	builder.addCase(actions.hideAlert, (state) => {
		state.isOpen = false;
	});
});
