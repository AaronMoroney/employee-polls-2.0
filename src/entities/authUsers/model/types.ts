import { User } from 'entities/users/model/types';

export type SignUpFormType = {
	email: string;
	password: string;
	confirmPassword: string;
};
export type SignInFormType = {
	email: string;
	password: string;
};
export type AuthState = {
	loading: boolean;
	isAuth: boolean;
};
