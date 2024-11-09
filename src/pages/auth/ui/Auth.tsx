import * as React from 'react';
import { 
	Box, 
	Link, 
} from '@mui/material';

import { SignupForm, SigninForm } from 'features/auth';

const styles = {
	root:{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '100vh',
	},
	formContainer: {
		border: "slategray 1px solid",
		borderRadius: "10px",
		padding: "1%",
	},
	authContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
};

const Auth = () => {
	const [isNewMember, setIsNewMember] = React.useState(true);
	const [showPassword, setShowPassword] = React.useState(false);

	const handleMemberStatus = () => {
		setIsNewMember(!isNewMember);
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Box sx={styles.root}>
			<Box sx={styles.authContainer}>
				<Box sx={styles.formContainer}>
					<h2>{isNewMember ? "Login" : "Signup"}</h2>
					<Link onClick={handleMemberStatus}>
						<p>{isNewMember ? "Not a member? Signup" : "Already a member? Login"}</p>
					</Link>
					{isNewMember 
						? <SigninForm/> 
						: <SignupForm 
							showPassword={showPassword}
							handleShowPassword={handleShowPassword}
						  />
					}
				</Box>
			</Box>
		</Box>
	);
};

export default Auth;
