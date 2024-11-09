import { createReducer } from '@reduxjs/toolkit';

import { AuthState } from './types';
import * as actions from './actions';

const initialState: AuthState = {
  loading: false,
  isAuth: false,
};

export const isAuthReducer = createReducer(initialState, (builder) => {
  builder.addCase(actions.loginUsers, (state) => {
    state.loading = true;
  })
  builder.addCase(actions.loginUsersSuccess, (state) => {
    state.loading = false;
    state.isAuth = true;
  })
  builder.addCase(actions.loginUsersFailure, (state) => {
    state.loading = false;
    state.isAuth = false;
  })
  builder.addCase(actions.logoutUser, (state) => {
    state.loading = false;
    state.isAuth = false;
  });
});