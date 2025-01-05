import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	FormControl,
	Box,
	TextField,
	IconButton,
	OutlinedInput,
	InputLabel,
	InputAdornment,
	Button,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useUserActions } from 'entities/authUsers/model';
import { useIsAuthState } from 'entities/authUsers/model';
import { SignInFormType } from 'entities/authUsers/model/types';
import { selectIsAuth } from 'entities/authUsers/model/selectors';


const styles = {
	textFields: {
		mt: 1,
		mb: 2,
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
	},
};

const SigninForm: React.FC = () => {
	const navigate = useNavigate();
	const { loginUsers } = useUserActions();
	const { selectIsAuth } = useIsAuthState();

	const [showPassword, setShowPassword] = React.useState(false);
	const [signinForm, setSigninForm] = React.useState<SignInFormType>({
		email: '',
		password: '',
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		switch (name) {
			case 'email':
				setSigninForm((prev) => ({
					...prev,
					[name]: value,
				}));
				break;
			case 'password':
				setSigninForm((prev) => ({
					...prev,
					[name]: value,
				}));
				break;
			default:
				break;
		}
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleSignIn = () => {
		loginUsers({
			email: signinForm.email,
			password: signinForm.password,
		});
	};

	React.useEffect(() => {
		if (selectIsAuth && localStorage.getItem('access')) {
			navigate('/home');
		}
	}, [navigate, selectIsAuth]);

	return (
		<>
			<Box sx={styles.container}>
				<FormControl>
					<TextField
						name='email'
						label='Email'
						sx={styles.textFields}
						onChange={onChange}
					/>
				</FormControl>
				<FormControl variant='outlined' sx={styles.textFields}>
					<InputLabel htmlFor='outlined-adornment-password'>
						Password
					</InputLabel>
					<OutlinedInput
						fullWidth
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									disableRipple
									disableFocusRipple
									onClick={handleShowPassword}
								>
									{showPassword ? (
										<Visibility />
									) : (
										<VisibilityOff />
									)}
								</IconButton>
							</InputAdornment>
						}
						label='Password'
						name='password'
						onChange={onChange}
					/>
				</FormControl>
				<Button onClick={handleSignIn} variant='contained'>
					Login
				</Button>
			</Box>
		</>
	);
};

export default SigninForm;
