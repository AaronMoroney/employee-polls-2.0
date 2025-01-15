import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';

import { Poll } from 'entities/questions/model/types';

interface PollOptionProps {
	poll: Poll;
	hasVoted: Boolean;
	handleCastVote: (
		e: React.MouseEvent<HTMLButtonElement>,
		pollId: string,
		authUserId: string
	) => void;
	authUserId: string;
	totalVotes: number;
	optionOnePercentage: number;
	optionTwoPercentage: number;
}

const styles = {
	box__option: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		justifyContent: 'flex-start',
	},
	box__option__voted: {
		display: 'flex',
		position: 'relative',
		alignItems: 'center',
		width: '100%',
		justifyContent: 'space-between',
	},
	box__option__voted__text: {
		display: 'flex',
		alignItems: 'center',
	},
	box__option__voted__indicator: (percentage: number) => ({
		position: 'absolute',
		backgroundColor: 'rgb(144, 202, 249)',
		width: `${percentage}%`,
		height: '100%',
		opacity: 0.1,
	}),
};

const HOMEPAGE = '/home';
const POLLPAGE = '/home/questions';

const PollOption: React.FC<PollOptionProps> = (props) => {
	const {
		poll,
		handleCastVote,
		authUserId,
		hasVoted,
		totalVotes, 
		optionOnePercentage, 
		optionTwoPercentage,
	} = props;
	const location = useLocation();


	if (hasVoted) {
		return (
			<>
				<Box sx={[styles.box__option__voted, { marginBottom: '5px' }]}>
					<div style={styles.box__option__voted__text}>
						<LooksOneIcon />
						<Typography variant='h6'>
							{poll.optionOne.text}
						</Typography>
					</div>
					<Typography variant='h6'>{optionOnePercentage}%</Typography>
					<Box
						sx={styles.box__option__voted__indicator(
							optionOnePercentage
						)}
					/>
				</Box>
				<Box sx={styles.box__option__voted}>
					<div style={styles.box__option__voted__text}>
						<LooksTwoIcon />
						<Typography variant='h6'>
							{poll.optionTwo.text}
						</Typography>
					</div>
					<Typography variant='h6'>{optionTwoPercentage}%</Typography>
					<Box
						sx={styles.box__option__voted__indicator(
							optionTwoPercentage
						)}
					/>
				</Box>
			</>
		);
	}

	if (location.pathname === HOMEPAGE && !hasVoted) {
		return (
			<>
				<Box sx={styles.box__option}>
					<LooksOneIcon />
					<Typography variant='h6'>{poll.optionOne.text}</Typography>
				</Box>
				<Box sx={styles.box__option}>
					<LooksTwoIcon />
					<Typography variant='h6'>{poll.optionTwo.text}</Typography>
				</Box>
			</>
		);
	}

	if (location.pathname === `${POLLPAGE}/${poll.id}` && !hasVoted) {
		return (
			<>
				<Button
					sx={styles.box__option}
					value='optionOne'
					onClick={(e) => handleCastVote(e, poll.id, authUserId)}
				>
					<LooksOneIcon />
					<Typography variant='h6'>{poll.optionOne.text}</Typography>
				</Button>
				<Button
					sx={styles.box__option}
					value='optionTwo'
					onClick={(e) => handleCastVote(e, poll.id, authUserId)}
				>
					<LooksTwoIcon />
					<Typography variant='h6'>{poll.optionTwo.text}</Typography>
				</Button>
			</>
		);
	}
};

export default PollOption;
