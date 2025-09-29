import { createAction } from '@reduxjs/toolkit';

export const getUsers = createAction('FETCH_USERS_REQUEST');
export const getUsersSuccess = createAction('FETCH_USERS_SUCCESS');
export const getUsersFailure = createAction('FETCH_USERS_FAILURE');