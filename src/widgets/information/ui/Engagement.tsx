import React from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { useUsersState } from 'entities/users/model';
import { useIsAuthState } from 'entities/authUsers/model';

const styles = {
	text: (color: string) => ({
		color: `${color}`,
		fontSize: 30,
		fontWeight: 'bold',
	}),
};

const Engagement = () => {
	const { selectUserEngagementScore } = useUsersState();
	const { selectAuthUserId } = useIsAuthState();

	const engagement = useSelector(selectUserEngagementScore(selectAuthUserId));

	const getColor = (engagement: number) => {
		if (engagement < 33) {
			return 'red';
		};

		if (engagement < 66) {
			return 'yellow';
		}
			
		return 'green';
	};

	const color = getColor(engagement);

	return (
		<>
			<Typography>engagement</Typography>
			<Typography sx={styles.text(color)} variant='h3'>
				{engagement}%
			</Typography>
		</>
	);
};

export default Engagement;
