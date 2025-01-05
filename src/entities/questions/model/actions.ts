import { createAction } from '@reduxjs/toolkit';

import { Poll } from './types';

export const fetchPolls = createAction('FETCH_POSTS_REQUEST');
export const fetchPollsError = createAction('FETCH_POSTS_ERROR');
export const fetchPollsSuccess = createAction<Poll[]>('FETCH_POSTS_SUCCESS');
export const addPoll = createAction<{author: string, optionOne: string, optionTwo: string}>('ADD_POLL_REQUEST');
export const addPollSuccess = createAction<Poll>('ADD_POLL_SUCCESS');
export const addPollError = createAction('ADD_POLL_ERROR');
