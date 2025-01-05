import { put, takeEvery, call } from 'redux-saga/effects';

import * as actions from './actions';
import * as alerts from 'shared/lib/alert/model/actions';
import { getPollsReq, addPollsReq } from 'entities/questions/api/api';
import { PollState } from './types';

function* getPollsSaga({ 
	payload 
}: ReturnType<typeof actions.fetchPolls>) {
	const apiCall = getPollsReq();
	const response: PollState = yield call(() => apiCall);

	yield put(actions.fetchPollsSuccess(response));
}

function* addPollSaga({ 
	payload
}: ReturnType<typeof actions.addPoll>) {
	const apiCall = addPollsReq(
		payload.author,
		payload.optionOne,
		payload.optionTwo,
	);

	const response = yield call(() => apiCall);

	if (response.error) {
		yield put(actions.addPollError(response.error.data));
		yield put(
			alerts.showAlert({
				message: response.error,
				severity: 'error',
				isOpen: true,
			})
		);
		return;
	}

	yield put(
		alerts.showAlert({
			message: 'Poll added successfully',
			severity: 'success',
			isOpen: true,
		})
	);

	yield put(actions.addPollSuccess(response));
}

export function* pollWatcher() {
	yield takeEvery(actions.fetchPolls, getPollsSaga);
	yield takeEvery(actions.addPoll, addPollSaga);
}

export default [pollWatcher];
