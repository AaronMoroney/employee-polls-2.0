import { put, takeEvery, call, select } from 'redux-saga/effects';

import * as actions from './actions';
import * as alerts from 'shared/lib/alert/model/actions';
import { getPollsReq, addPollsReq } from 'entities/questions/api/api';
import { patchUsersReq } from 'entities/users/api/api';
import { selectAuthUserId } from 'entities/authUsers/model/selectors';
import { Poll } from './types';

function* getPollsSaga({ 
	payload 
}: ReturnType<typeof actions.fetchPolls>) {
	const apiCall = getPollsReq();
	const response: Poll[] = yield call(() => apiCall);

	yield put(actions.fetchPollsSuccess(response));
}

function* addPollSaga({ 
	payload
}: ReturnType<typeof actions.addPoll>) {
	const authUserId = yield select(selectAuthUserId);
	const addPollCall = addPollsReq(
		payload.author,
		payload.optionOne,
		payload.optionTwo,
	);

	const response = yield call(() => addPollCall);

	if (response.error) {
		yield put(actions.addPollError(response.error));
		yield put(
			alerts.showAlert({
				message: 'failed to add poll, try again',
				severity: 'error',
				isOpen: true,
			})
		);
		return;
	}

	yield put(actions.addPollSuccess(response));

	const patchCall = patchUsersReq(authUserId, response.id);
	const patchResponse = yield call(() => patchCall);

	if (patchResponse.error) {
		yield put(
			alerts.showAlert({
				message: 'failed to add poll, try again',
				severity: 'error',
				isOpen: true,
			})
		);
		return;
	}
}

export function* pollWatcher() {
	yield takeEvery(actions.fetchPolls, getPollsSaga);
	yield takeEvery(actions.addPoll, addPollSaga);
}

export default [pollWatcher];
