import React from 'react';
import { 
    Paper,
    Avatar,
    Box, 
    CardContent, 
    Typography,  
    Button, 
    Divider
} from '@mui/material';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import { Link } from 'react-router-dom';

import { Questions } from 'entities/questions/model/types';

const styles = {
    PollCard: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between'  
    },
    PollCard__header__container: {
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 30, 
        height: 30, 
        marginRight: '10px' 
    },
    card__content: {
        padding: '4px 16px'
    }, 
    box__option : {
        display: 'flex', 
        alignItems: 'center'
    },
    box__vote__button : {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    },
    pollCard__header: (theme: any) => ({
        padding: '1% 2%', 
        marginBottom: '2%', 
        backgroundColor:  'theme.palette.background',
        borderRadius: '30px', 
    }),
};

interface PollsCardsProps {
    question: Questions;
}

const PollsCard: React.FC<PollsCardsProps> = (props) => {
    const { question } = props; 

    // let completed = false;

    //calculate votes totals
    //const votes = question.optionOne.votes.length + question.optionTwo.votes.length;

    return (
        <>
            <Paper sx={styles.pollCard__header}>
                <Box sx={styles.PollCard}>
                    <Box sx={styles.PollCard__header__container}>
                        <Avatar
                            sx={styles.avatar}
                        />
                        <p>{`${question.author} · 66% engagment`}</p>
                    </Box>
                    {/* <Typography>{ `${votes} ${votes > 1 ? 'votes' : 'vote'}`}</Typography> */}
                </Box>
                <CardContent sx={styles.card__content} >
                    <Typography
                        gutterBottom
                    >
                        Would you rather?
                    </Typography>
                    <Divider sx={{marginBottom: '10px'}}/>
                    <Box sx={styles.box__option}>
                    <LooksOneIcon />
                        <Typography
                            variant='h6'
                        >
                            {question.optionOne.text}
                        </Typography>
                    </Box>
                    <Box sx={styles.box__option}>
                    <LooksTwoIcon />
                        <Typography
                            variant='h6'
                        >
                            {question.optionTwo.text}
                        </Typography>
                    </Box>
                </CardContent>
                <Box sx={styles.box__vote__button}>
                    <Link to='questions/:5' >
                            <Button>
                                <HowToVoteIcon />
                                VOTE
                            </Button>
                    </Link>
                </Box>
            </Paper>
        </>
    )
}

export default PollsCard;