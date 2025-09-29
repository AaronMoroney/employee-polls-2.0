import React from 'react';
import { useLocation } from 'react-router-dom';
import {
	Box,
	Typography,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
} from '@mui/material';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';

import { Poll } from 'entities/polls/model/types';
import PollEngagement from './PollEngagement';

interface PollOptionProps {
	poll: Poll;
	hasVoted: boolean;
	handleCastVote: (
		option: string,
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
	box__cast__vote: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
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
	const [selectedOption, setSelectedOption] = React.useState('');

	const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(e.target.value);
	};

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
				<Box>
					<PollEngagement
						totalVotes={totalVotes}
						hasVoted={hasVoted}
						poll={poll}
						handleCastVote={handleCastVote}
						selectedOption={selectedOption}
						authUserId={authUserId}
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
				<Box>
					<PollEngagement
						totalVotes={totalVotes}
						hasVoted={hasVoted}
						poll={poll}
						handleCastVote={handleCastVote}
						selectedOption={selectedOption}
						authUserId={authUserId}
					/>
				</Box>
			</>
		);
	}

	if (location.pathname === `${POLLPAGE}/${poll.id}` && !hasVoted) {
		return (
			<>
				<Box sx={styles.box__cast__vote}>
					<FormControl component='fieldset'>
						<RadioGroup
							aria-label='poll options'
							name='pollOptions'
							onChange={(e) => handleOptionChange(e)}
						>
							<FormControlLabel
								value='optionOne'
								control={<Radio />}
								label={poll.optionOne.text}
							/>
							<FormControlLabel
								value='optionTwo'
								control={<Radio />}
								label={poll.optionTwo.text}
							/>
						</RadioGroup>
					</FormControl>
					<PollEngagement
						totalVotes={totalVotes}
						hasVoted={hasVoted}
						poll={poll}
						handleCastVote={handleCastVote}
						selectedOption={selectedOption}
						authUserId={authUserId}
					/>
				</Box>
			</>
		);
	}
};

export default PollOption;
