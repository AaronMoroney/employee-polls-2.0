import { PollsState } from 'entities/questions/model/types';
import { UsersState } from 'entities/users/model/types';
import { AuthState } from 'entities/authUsers/model/types';
import { AlertState } from 'shared/lib/alert/model/types';

export interface AppState {
	polls: PollsState;
	users: UsersState;
	isAuth: AuthState;
	alert: AlertState;
}
