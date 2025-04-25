import * as React from 'react';
import { 
	Typography, 
	Paper, 
	CircularProgress 
} from '@mui/material';
import { useParams } from 'react-router-dom';

import { usePollActions } from 'entities/questions/model';
import { usePollState } from 'entities/questions/model';
import { PollsItem } from 'features/polls';
import { ReactionPanel } from 'features/polls';

const styles = {
	pollCard: {
		padding: '1% 2%',
		marginBottom: '2%',
		borderRadius: '30px',
	},
};

const SinglePoll: React.FC = () => {
	const { question_id } = useParams();
	const { fetchSinglePoll } = usePollActions();
	const { singlePoll } = usePollState();

	if (!question_id) {
		return <p>poll not found</p>;
	}

	React.useEffect(() => {
		fetchSinglePoll(question_id);
	}, [question_id]);

	if (!singlePoll) {
		return <CircularProgress />;
	}

	return (
		<>
			<Typography variant='h4' marginBottom={2}>
				Vote on this poll
			</Typography>
			<Paper sx={styles.pollCard}>
				<PollsItem poll={singlePoll} />
				<ReactionPanel poll={singlePoll} />
			</Paper>
		</>
	);
};

export default SinglePoll;
