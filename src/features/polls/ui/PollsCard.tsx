import React from 'react';
import { 
    Card, 
    Avatar,
    Box, 
    CardContent, 
    Typography,  
    Button, 
    Divider
} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import { Link } from 'react-router-dom';

import { Questions} from 'entities/questions/model/types';

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
};

interface PollsCardsProps {
    question: Questions;
}

const PollsCard: React.FC<PollsCardsProps> = (props) => {
    const { question } = props; 

    let completed = false;
    const theme = useTheme();

    //calculate votes totals
    // const votes = question.optionOne.votes.length + question.optionTwo.votes.length;

    const DynamicStyles = {
        PollCard__header: {
            padding: '1% 2%', 
            marginBottom: '2%', 
            backgroundColor: completed ? theme.palette.background.completedPaper : theme.palette.background.paper
        },
    };

    return (
        <>
            <Card 
                sx={[ DynamicStyles.PollCard__header]}
                variant='outlined'
            >
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
            </Card>
        </>
    )
}

export default PollsCard