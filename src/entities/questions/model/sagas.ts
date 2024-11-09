import { put, takeEvery, call } from 'redux-saga/effects';

import * as actions from './actions';
import { getQuestionsReq } from '../api/api';
import { QuestionsState } from './types';

function* questionsSaga({
    payload
}: ReturnType<typeof actions.fetchPosts>) {
    const apiCall = getQuestionsReq();
    const response: QuestionsState = yield call(() => apiCall);

    yield put(actions.fetchPostsSuccess(response));
}

export function* questionsWatcher() {
    yield takeEvery(actions.fetchPosts, questionsSaga);
}
  
export default [questionsWatcher];