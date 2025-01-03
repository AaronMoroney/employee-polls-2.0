import React from 'react';
import {
	FormControl,
	TextField,
	Box,
	Button,
	InputLabel,
	InputAdornment,
	OutlinedInput,
	IconButton,
	FormHelperText,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Theme } from '@mui/material/styles';

import { validatePasswordMatch } from 'shared/helpers/auth';
import { useUserActions } from 'entities/authUsers/model';
import { SignUpFormType } from 'entities/authUsers/model/types';

interface SignupFormProps {
	showPassword: boolean;
	handleShowPassword: () => void;
}

const styles = {
	textFields: {
		mt: 1,
		mb: 2,
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
	},
	error: (theme: Theme) => ({
		color: theme.palette.error.main,
	}),
};

const SignupForm: React.FC<SignupFormProps> = (props) => {
	const { showPassword, handleShowPassword } = props;
	const { addUsers } = useUserActions();
	const [error, setError] = React.useState(false);
	const [errorValidateMessage, setErrorValidateMessage] = React.useState('');
	const [signupForm, setSignupForm] = React.useState<SignUpFormType>({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		switch (name) {
			case 'email':
				setSignupForm((prev) => ({
					...prev,
					[name]: value,
				}));
				break;
			case 'password':
				setSignupForm((prev) => ({
					...prev,
					[name]: value,
				}));
				break;
			case 'confirmPassword':
				setSignupForm((prev) => ({
					...prev,
					[name]: value,
				}));
				break;
			default:
				break;
		}
	};

	const handleSignUp = () => {
		const isCorrectPassword = validatePasswordMatch(
			signupForm.password,
			signupForm.confirmPassword,
			setError,
			setErrorValidateMessage
		);

		if (!signupForm.email || !isCorrectPassword) {
			return;
		}

		addUsers({
			email: signupForm.email,
			password: signupForm.password,
		});
	};

	return (
		<>
			<Box sx={styles.container}>
				<FormControl>
					<TextField
						name='email'
						label='Email'
						onChange={onChange}
						sx={styles.textFields}
					/>
				</FormControl>
				<FormControl variant='outlined' sx={styles.textFields}>
					<InputLabel htmlFor='outlined-adornment-password'>
						Create Password
					</InputLabel>
					<OutlinedInput
						name='password'
						label='Create Password'
						onChange={onChange}
						error={error}
						type={showPassword ? 'text' : 'password'}
						fullWidth
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									onClick={handleShowPassword}
									disableRipple
									disableFocusRipple
								>
									{showPassword ? (
										<Visibility />
									) : (
										<VisibilityOff />
									)}
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
				<FormControl variant='outlined' sx={styles.textFields}>
					<InputLabel htmlFor='outlined-adornment-password'>
						Confirm Password
					</InputLabel>
					<OutlinedInput
						name='confirmPassword'
						label='Confirm Password'
						onChange={onChange}
						error={error}
						fullWidth
						type='password'
					/>
				</FormControl>
				{error && (
					<FormHelperText sx={styles.error}>
						{errorValidateMessage}
					</FormHelperText>
				)}
				<Button onClick={handleSignUp} variant='contained'>
					Signup
				</Button>
			</Box>
		</>
	);
};

export default SignupForm;
