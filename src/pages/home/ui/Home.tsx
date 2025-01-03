import * as React from 'react';
import { 
	Box, 
	Typography, 
	Chip 
} from '@mui/material';

import { usePollActions } from 'entities/questions/model';
import PollsSwitch from 'features/polls/ui/PollsSwitch';
import PollsCard from 'features/polls/ui/PollsCard';
import { usePollState } from 'entities/questions/model';

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
	const { polls } = usePollState();
	const [isFiltered, setIsFiltered] = React.useState(true);
	const [activeChip, setActiveChip] = React.useState('all');

	React.useEffect(() => {
		fetchPolls();
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
				{Object.keys(polls).length > 0 ? (
					Object.keys(polls).map((poll) => (
						<PollsCard key={poll} question={polls[poll]} />
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
