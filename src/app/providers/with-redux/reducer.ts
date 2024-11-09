import { combineReducers } from 'redux';

import { questionsReducer } from 'entities/questions/model/reducer';
import { usersReducer } from 'entities/users/model/reducer';
import { isAuthReducer } from 'entities/authUsers/model/reducer';

const rootReducer = combineReducers({
  questions: questionsReducer,
  users: usersReducer,
  isAuth: isAuthReducer,
});

export default rootReducer;