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
	authUserId: string;
	authUser: string;
	loading: boolean;
	isAuth: boolean;
};
