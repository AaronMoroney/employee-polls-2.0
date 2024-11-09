import { put, takeEvery, call, take } from 'redux-saga/effects';

import * as actions from './actions';
import { addUsersReq, loginReq } from 'entities/authUsers/api/api';

function* addUsersSaga({
    payload: { email, password }
}: ReturnType<typeof actions.addUsers>) {
    // TODO: is this coming from components anyway?
    if (!email || !password) {
        return;
    }

    const initialUsersData = {
        email, 
        password, 
        avatarURL: null,
        answers: {},
        questions: [],  
    }

    const apiCall = addUsersReq(initialUsersData);
    const response = yield call(() => apiCall);

    if (response.error) {
        actions.addUsersFailure();
    }

    yield put(actions.addUsersSuccess(response));
}

function* loginUsersSaga({
    payload: { email, password }
}: ReturnType<typeof actions.loginUsers>) {
    if (!email || !password) {
        return;
    }

    const apiCall = loginReq({ email, password });
    const response = yield call(() => apiCall);

    if (response.error) {
        actions.loginUsersFailure();
        return;
    }

    if (response.accessToken) {
        localStorage.setItem('access', response.accessToken);
        yield put(actions.loginUsersSuccess(response));
    }
}

function* logoutUserSaga() {
    localStorage.removeItem('access');
}

export function* isAuthWatcher() {
    yield takeEvery(actions.addUsers, addUsersSaga);
    yield takeEvery(actions.loginUsers, loginUsersSaga);
    yield takeEvery(actions.logoutUser, logoutUserSaga);
}

export default [isAuthWatcher];