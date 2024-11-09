import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import { useQuestionsActions } from 'entities/questions/model';
import PollsSwitch  from 'features/polls/ui/PollsSwitch'
import PollsCard from 'features/polls/ui/PollsCard';
import { useQuestionsState } from 'entities/questions/model';

const styles = {
    polls__page__header: {
        display: 'flex', 
        flexDirextion: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'baseline'
    },
    polls__page__container: {
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

const Poll = () => {
    const { fetchPosts } = useQuestionsActions();
    const { questions } = useQuestionsState();
    const [isFiltered, setIsFiltered] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleIsFiltered = () => {
        setIsFiltered(!isFiltered)
    }
   
    return (
        <>
            <Box sx={styles.polls__page__header}>
                <Typography variant='h4' gutterBottom>Polls</Typography>
                <PollsSwitch onClick={handleIsFiltered}/>
            </Box>
            <Box sx={styles.polls__page__container}>
                {(questions ? Object.keys(questions) : []).map((question) => {
                    return (
                        <PollsCard 
                            key={question}
                            question={questions[question]}
                        />
                    )  
                })}
            </Box>
        </>
    )
}

export default Poll;