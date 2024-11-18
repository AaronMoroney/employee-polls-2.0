import { call, put, takeLatest } from 'redux-saga/effects';

import * as actions from './actions';
import { getUsersReq } from '../api/api';

function* getUsersSaga({
    payload
}: ReturnType<typeof actions.getUsers>) {
    const apiCall = getUsersReq();
    const response = yield call(() => apiCall);

    yield put(actions.getUsersSuccess(response));
}

export function* usersWatcher() {
    yield takeLatest(actions.getUsers, getUsersSaga);
}

export default [usersWatcher];