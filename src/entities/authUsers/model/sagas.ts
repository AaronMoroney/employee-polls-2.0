import { put, takeEvery, call, take } from 'redux-saga/effects';

import * as actions from './actions';
import { addUsersReq, loginReq } from 'entities/authUsers/api/api';
import * as alerts from 'shared/lib/alert/model/actions';

function* addUsersSaga({
	payload: { email, password },
}: ReturnType<typeof actions.addUsers>) {
	if (!email || !password) {
		return;
	}

	const initialUsersData = {
		email,
		password,
		avatarURL: null,
		answers: [],
		questions: [],
	};

	const apiCall = addUsersReq(initialUsersData);
	const response = yield call(() => apiCall);

	yield put(actions.addUsersSuccess(response));

	yield put(
		alerts.showAlert({
			message: 'user created successfully',
			severity: 'success',
			isOpen: true,
		})
	);
}

function* loginUsersSaga({
	payload: { email, password },
}: ReturnType<typeof actions.loginUsers>) {
	if (!email || !password) {
		return;
	}

	const apiCall = loginReq({ email, password });
	const response = yield call(() => apiCall);

	if (response.error) {
		yield put(actions.loginUsersFailure());
		yield put(
			alerts.showAlert({
				message: response.error,
				severity: 'error',
				isOpen: true,
			})
		);
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
