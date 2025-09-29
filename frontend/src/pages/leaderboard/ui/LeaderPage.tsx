import * as React from 'react';
import { 
	Box, 
	Typography 
} from '@mui/material';

import { Leaderboard, ToggleTimePeriod } from 'features/leaderboard';
import { useUsersActions, useUsersState } from 'entities/users/model';

const styles = {
	leader__page__container: {
		marginTop: '30px',
		height: '95%',
		overflow: 'overlay',
		'&::-webkit-scrollbar': {
			width: '1px',
		},
		'&::-webkit-scrollbar-track': {
			background: 'transparent',
		},
	},
};

const LeaderPage = () => {
	const { getUsers } = useUsersActions();
	const { users } = useUsersState();

	React.useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			<Typography variant='h4'>Leaderboard</Typography>
			<Box sx={styles.leader__page__container}>
				<ToggleTimePeriod />
				<Leaderboard users={users} />
			</Box>
		</>
	);
};

export default LeaderPage;
