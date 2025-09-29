import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootReducer from 'app/providers/with-redux/reducer';
import rootSaga from 'app/providers/with-saga/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)