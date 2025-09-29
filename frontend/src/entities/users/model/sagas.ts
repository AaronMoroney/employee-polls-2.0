import { call, put, takeLatest } from 'redux-saga/effects';

import * as actions from './actions';
import { getUsersReq } from '../api/api';
import * as alerts from 'shared/lib/alert/model/actions';

function* getUsersSaga({
    payload
}: ReturnType<typeof actions.getUsers>) {
    const apiCall = getUsersReq();
    const response = yield call(() => apiCall);

    if(response.error) {
        yield put(
            alerts.showAlert({
                message: 'Error fetching users',
                severity: 'error',
                isOpen: true,
            })
        );
        return;
    }

    yield put(actions.getUsersSuccess(response));
}

export function* usersWatcher() {
    yield takeLatest(actions.getUsers, getUsersSaga);
}

export default [usersWatcher];