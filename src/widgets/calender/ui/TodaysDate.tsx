import { Typography } from '@mui/material';

const TodaysDate = () => {
    const now = new Date();
    const currentDate = now.getDate(); 
    const currentDay = now.toLocaleString('en-US', { weekday: 'long' }).toLocaleLowerCase();

    return (
        <>
            <Typography>{currentDay}</Typography>
            <Typography variant='h2'>
                {currentDate}
            </Typography>
        </>
    )
}

export default TodaysDate