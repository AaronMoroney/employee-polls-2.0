import { all, fork } from 'redux-saga/effects';

import {questionsWatcher }from 'entities/questions/model/sagas';
import { isAuthWatcher } from 'entities/authUsers/model/sagas';

function* rootSaga() {
    yield all([
        fork(questionsWatcher),
        fork(isAuthWatcher),
    ]);
}
export default rootSaga;