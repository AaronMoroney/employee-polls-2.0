import { Typography } from '@mui/material'

import { SinglePoll } from 'widgets/singlePoll';

const Question = () => { 
    return (
        <>
            <Typography
                variant='h4'
                marginBottom={2}
            >
                Question
            </Typography>
            <SinglePoll />
        </>
    )
}

export default Question