import { createReducer } from '@reduxjs/toolkit';

import * as actions from './actions';
import { User } from './types';

interface State {
    users: User[] | [];
    pending: boolean;
}

const initialUsersState: State = {
    users: [],
    pending: false,
}

export const usersReducer = createReducer(initialUsersState, (builder) => {
    builder.addCase(actions.getUsers, (state) => {
       state.pending = true;
    })
    builder.addCase(actions.getUsersSuccess, (state, action) => {
        state.users = action.payload ?? [];
        state.pending = false;
    })
    builder.addCase(actions.getUsersFailure, (state) => {
        state.pending = false;
    })
});
