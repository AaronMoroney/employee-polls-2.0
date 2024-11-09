import { createAction } from '@reduxjs/toolkit';

export const addUsers = createAction<{email: string, password: string}>('ADD_USERS_REQUEST');
export const addUsersSuccess = createAction('ADD_USERS_SUCCESS');
export const addUsersFailure = createAction('ADD_USERS_FAILURE');
export const loginUsers = createAction<{email: string, password: string}>('LOGIN_USERS_REQUEST');
export const loginUsersSuccess = createAction('LOGIN_USERS_SUCCESS');
export const loginUsersFailure = createAction('LOGIN_USERS_FAILURE');
export const logoutUser = createAction('LOGOUT_USER');
export const logoutUserSuccess = createAction('LOGOUT_USER');