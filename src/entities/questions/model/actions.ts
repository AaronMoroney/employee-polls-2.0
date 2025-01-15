import { createAction } from '@reduxjs/toolkit';

import { Poll } from './types';

export const fetchPolls = createAction('FETCH_POSTS_REQUEST');
export const fetchPollsError = createAction('FETCH_POSTS_ERROR');
export const fetchPollsSuccess = createAction<Poll[]>('FETCH_POSTS_SUCCESS');
export const addPoll = createAction<{
    author: string, 
    optionOne: string, 
    optionTwo: string
}>('ADD_POLL_REQUEST');
export const addPollSuccess = createAction<Poll>('ADD_POLL_SUCCESS');
export const addPollError = createAction('ADD_POLL_ERROR');
export const fetchSinglePoll = createAction<string>('FETCH_SINGLE_POLL_REQUEST');
export const fetchSinglePollSuccess = createAction('FETCH_SINGLE_POLL_SUCCESS');
export const fetchSinglePollError = createAction('FETCH_SINGLE_POLL_ERROR');
export const castVoteRequest = createAction<{
    option: string, 
    pollId: string, 
    authUserId: string
}>('CAST_VOTE_REQUEST');
export const castVoteSuccess = createAction<Poll>('CAST_VOTE_SUCCESS');
export const castVoteError = createAction('CAST_VOTE_ERROR');
