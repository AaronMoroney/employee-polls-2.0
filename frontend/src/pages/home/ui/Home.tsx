import * as React from 'react';
import { Box, Typography, Paper } from '@mui/material';

import PollsSwitch from 'features/polls/ui/PollsSwitch';
import PollsItem from 'features/polls/ui/PollsCard/PollsItem';
import { Poll } from 'entities/polls/model/types';
import { usePollActions } from 'entities/polls/model';
import { usePollState } from 'entities/polls/model';
import { useUsersActions } from 'entities/users/model';

const styles = {
	header: {
		display: 'flex',
		flexDirextion: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	header__container: {
		display: 'flex',
		flexDirextion: 'row',
		alignItems: 'center',
	},
	pollCard: {
		padding: '1% 2%',
		marginBottom: '2%',
		borderRadius: '30px',
	},
	polls__container: {
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

const Home = () => {
	const { fetchPolls } = usePollActions();
	const { getUsers } = useUsersActions();
	const { polls } = usePollState();
	const [isFiltered, setIsFiltered] = React.useState(true);

	React.useEffect(() => {
		fetchPolls();
		getUsers();
	}, []);

	const handleIsFiltered = React.useCallback(() => {
		setIsFiltered(!isFiltered);
	}, []);

	return (
		<>
			<Box sx={styles.header}>
				<Box>
					<Typography variant='h4' gutterBottom>
						Feed
					</Typography>
				</Box>
				<Box>
					<PollsSwitch onClick={handleIsFiltered} />
				</Box>
			</Box>
			<Box sx={styles.polls__container}>
				{polls.length > 0 ? (
					polls.map((poll: Poll) => (
						<Paper sx={styles.pollCard}>
							<PollsItem key={poll.id} poll={poll} />
						</Paper>
					))
				) : (
					<Typography variant='h6' gutterBottom>
						No polls to display
					</Typography>
				)}
			</Box>
		</>
	);
};

export default Home;
