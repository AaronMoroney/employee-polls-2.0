import { combineReducers } from 'redux';

import { pollsReducer } from 'entities/questions/model/reducer';
import { usersReducer } from 'entities/users/model/reducer';
import { isAuthReducer } from 'entities/authUsers/model/reducer';
import { alertReducer } from 'shared/lib/alert/model/reducer';

const rootReducer = combineReducers({
	polls: pollsReducer,
	users: usersReducer,
	isAuth: isAuthReducer,
	alert: alertReducer,
});

export default rootReducer;
