import { createAction } from '@reduxjs/toolkit';

import { QuestionsState} from './types';

export const fetchPosts = createAction('FETCH_POSTS_REQUEST');
export const fetchPostsSuccess = createAction<QuestionsState>('FETCH_POSTS_SUCCESS');
export const fetchPostsError = createAction('FETCH_POSTS_ERROR');