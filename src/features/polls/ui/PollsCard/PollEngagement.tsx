import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Box,
    Typography, 
    Button,
    Divider,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HowToVoteIcon from '@mui/icons-material/HowToVote';

import { Poll } from 'entities/questions/model/types';

const styles = {
    divider: {
        margin: '10px 0px',
    },
    controls: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'baseline',
	},
    engagement: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
};

interface PollsCardsProps {
    totalVotes: number;
    hasVoted: boolean;
    poll: Poll;
    handleCastVote: (
		option: string,
		pollId: string,
		authUserId: string
	) => void;
    selectedOption: string;
    authUserId: string;
}

const HOMEPAGE = '/home';

const PollEngagement: React.FC<PollsCardsProps> = (props) => {
    const { 
        totalVotes,  
        hasVoted,
        poll,
        handleCastVote,
        selectedOption,
        authUserId,
    } = props;
    const location = useLocation();

        return (
            <>
                <Divider sx={styles.divider}/>
                <Box sx={styles.controls}>

                    <Box sx={styles.engagement}>
                        <Typography sx={{ paddingRight: '5px' }}>
                            {totalVotes > 1 ? `${totalVotes} Votes` : `${totalVotes} Vote`}
                        </Typography>
                        <Button>
                            <FavoriteBorderIcon />0
                        </Button>
                    </Box>
                    {location.pathname === HOMEPAGE ? (
                            <Link to={`questions/${poll.id}`}>
                                <Button>
                                    <HowToVoteIcon />
                                    View Poll
                                </Button>
                            </Link>
                    ) : (
                        <Button
                            onClick={() => handleCastVote(selectedOption, poll.id, authUserId)}
                            disabled={hasVoted}
                        >
                            <Typography>Vote</Typography>
                        </Button>
                    )}
                </Box>
            </>
        );
};

export default PollEngagement;
