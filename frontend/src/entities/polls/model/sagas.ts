import { put, takeEvery, call, select } from 'redux-saga/effects';

import * as actions from './actions';
import * as alerts from 'shared/lib/alert/model/actions';
import {
	getPollsReq,
	addPollsReq,
	getSinglePollReq,
	castVoteReq,
} from 'entities/polls/api/api';
import { patchUsersReq } from 'entities/users/api/api';
import { selectAuthUserId } from 'entities/authUsers/model/selectors';
import { Poll } from './types';

function* getPollsSaga({ payload }: ReturnType<typeof actions.fetchPolls>) {
	const apiCall = getPollsReq();
	const response: Poll[] = yield call(() => apiCall);

	yield put(actions.fetchPollsSuccess(response));
}

function* addPollSaga({ payload }: ReturnType<typeof actions.addPoll>) {
	const authUserId = yield select(selectAuthUserId);
	const addPollCall = addPollsReq(
		payload.author,
		payload.optionOne,
		payload.optionTwo
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

	const patchCall = patchUsersReq(authUserId, response.id, 'questions');
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

	yield put(
		alerts.showAlert({
			message: 'Poll added successfully',
			severity: 'success',
			isOpen: true,
		})
	);
}

function* getSinglePollSaga({
	payload,
}: ReturnType<typeof actions.fetchSinglePoll>) {
	const apiCall = getSinglePollReq(payload);
	const response = yield call(() => apiCall);

	if (response.error) {
		yield put(actions.fetchSinglePollError(response.error));
		return;
	}

	yield put(actions.fetchSinglePollSuccess(response));
}

function* castVoteSaga({
	payload,
}: ReturnType<typeof actions.castVoteRequest>) {
	const apiCall = castVoteReq(
		payload.option,
		payload.pollId,
		payload.authUserId
	);
	const response = yield call(() => apiCall);

	if (response.error) {
		yield put(actions.castVoteError(response.error));
		yield put(
			alerts.showAlert({
				message: 'failed to vote, please try again',
				severity: 'error',
				isOpen: true,
			})
		);
		return;
	}

	yield put(
		alerts.showAlert({
			message: 'vote cast successfully',
			severity: 'success',
			isOpen: true,
		})
	);

	yield put(actions.castVoteSuccess(response));

	const patchCall = patchUsersReq(payload.authUserId, response.id, 'answers');
	const patchResponse = yield call(() => patchCall);

	if (patchResponse.error) {
		yield put(
			alerts.showAlert({
				message: 'failed to cast vote, please try again',
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
	yield takeEvery(actions.fetchSinglePoll, getSinglePollSaga);
	yield takeEvery(actions.castVoteRequest, castVoteSaga);
}

export default [pollWatcher];
