import * as React from 'react';
import { 
	Box, 
	Typography, 
	Chip, 
	Paper,
} from '@mui/material';

import PollsSwitch from 'features/polls/ui/PollsSwitch';
import PollsItem from 'features/polls/ui/PollsCard/PollsItem';
import { Poll } from 'entities/questions/model/types';
import { usePollActions } from 'entities/questions/model';
import { usePollState } from 'entities/questions/model';
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
	chip: {
		mr: 1,
	},
	chip__container: {
		display: 'flex',
		flexDirection: 'column',
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
	const [activeChip, setActiveChip] = React.useState('all');

	React.useEffect(() => {
		fetchPolls();
		getUsers();
	}, []);

	const handleIsFiltered = React.useCallback(() => {
		setIsFiltered(!isFiltered);
	}, []);

	const handleActiveChip = React.useCallback((e) => {
		const { innerText } = e.target;
		setActiveChip(innerText);
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
					{activeChip === 'polls' && (
						<PollsSwitch onClick={handleIsFiltered} />
					)}
					<Chip
						sx={styles.chip}
						label='all'
						variant={activeChip === 'all' ? 'filled' : 'outlined'}
						onClick={handleActiveChip}
					/>
					<Chip
						sx={styles.chip}
						label='posts'
						variant={activeChip === 'posts' ? 'filled' : 'outlined'}
						onClick={handleActiveChip}
					/>
					<Chip
						sx={styles.chip}
						label='polls'
						variant={activeChip === 'polls' ? 'filled' : 'outlined'}
						onClick={handleActiveChip}
					/>
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
