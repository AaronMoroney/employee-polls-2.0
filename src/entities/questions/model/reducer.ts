import { createReducer } from '@reduxjs/toolkit';

import { QuestionsState } from './types'
import * as actions from './actions';

interface State {
    questions: QuestionsState;
    votes: string[];
    text: string;
    pending: boolean;
}

const initialState: State = {
    // TODO: correct this
    questions: {}, 
    votes: [], 
    text: '',
    pending: false,
}

export const questionsReducer = createReducer(initialState, (builder) => {
    builder.addCase(actions.fetchPosts, (state) => {
        state.pending = true;
    })
    builder.addCase(actions.fetchPostsSuccess, (state, action) => {
        state.questions = action.payload;
        state.pending = false;
    })
    builder.addCase(actions.fetchPostsError, (state, action) => {
        state.pending = false;
    })
});
