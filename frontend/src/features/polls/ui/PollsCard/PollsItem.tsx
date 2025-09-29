import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {
	Avatar,
	Box,
	CardContent,
	Typography,
	Divider,
	CircularProgress,
} from '@mui/material';

import PollOption from './PollOption';
import { checkHasVoted, calculateOptionPercentage } from 'shared/helpers/polls';
import { useIsAuthState } from 'entities/authUsers/model';
import { usePollActions } from 'entities/polls/model';
import { useUsersState } from 'entities/users/model';
import { User } from 'entities/users/model/types';
import { Poll } from 'entities/polls/model/types';

const styles = {
	pollCard__header: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	pollCard__header__container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	avatar: {
		width: 30,
		height: 30,
		marginRight: '10px',
	},
	card__content: {
		padding: '4px ',
	},
	controls: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '0px 16px',
		alignItems: 'baseline',
	},
	divider__top: {
		margin: '10px 0px',
	},
};

interface PollsCardsProps {
	poll: Poll;
}

const PollsItem: React.FC<PollsCardsProps> = (props) => {
	const { poll } = props;
	const location = useLocation();
	const { selectAuthUserId } = useIsAuthState();
	const { castVoteRequest } = usePollActions();
	const { users } = useUsersState();
	const { selectUserEngagementScore } = useUsersState();
	const [hasVoted, setHasVoted] = React.useState(false);

	if (location.pathname === '/home' && !poll) {
		return <CircularProgress />;
	}

	const totalVotes = React.useMemo(
		() => poll.optionOne.votes.length + poll.optionTwo.votes.length,
		[poll]
	);

	const pollAuthor = React.useMemo(
		() => users.find((user: User) => user.email === poll.author),
		[users, poll.author]
	);

	const optionOnePercentage = calculateOptionPercentage(
		poll.optionOne.votes.length,
		totalVotes
	);

	const optionTwoPercentage = calculateOptionPercentage(
		poll.optionTwo.votes.length,
		totalVotes
	);

	const engagement = useSelector(
		pollAuthor ? selectUserEngagementScore(pollAuthor.id) : () => null
	);

	const handleVote = (option: string, pollId: string, authUserId: string) => {
		castVoteRequest({
			option,
			pollId,
			authUserId,
		});
		setHasVoted(true);
	};

	React.useEffect(() => {
		setHasVoted(checkHasVoted(poll, selectAuthUserId));
	}, [poll, selectAuthUserId]);

	return (
		<>
			<Box sx={styles.pollCard__header__container}>
				<Box sx={styles.pollCard__header}>
					<Avatar sx={styles.avatar} />
					<p>{`${poll.author} · ${engagement}% engagement`}</p>
				</Box>
			</Box>
			<CardContent sx={styles.card__content}>
				<Typography gutterBottom>Would you rather?</Typography>
				<Divider sx={styles.divider__top} />
				<PollOption
					poll={poll}
					hasVoted={hasVoted}
					handleCastVote={handleVote}
					authUserId={selectAuthUserId}
					totalVotes={totalVotes}
					optionOnePercentage={optionOnePercentage}
					optionTwoPercentage={optionTwoPercentage}
				/>
			</CardContent>
		</>
	);
};

export default PollsItem;
