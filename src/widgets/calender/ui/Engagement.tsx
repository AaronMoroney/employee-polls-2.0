import {  Typography } from '@mui/material'

const Engagement = () => {
    const engagement = 90;
    let color;

    if(engagement < 33) {
       color =  'red'
    } else if (engagement >33 &&  engagement < 66) {
        color = 'orange'
    } else {
        color = 'green';
    } 
    
    return (
        <>
            <Typography >
                engagement 
            </Typography>
            <Typography 
                sx={{fontWeight: 'bold', color: {color}}}
                variant='h3'
            >
                {engagement}%
            </Typography>
        </>
    )
}

export default Engagement