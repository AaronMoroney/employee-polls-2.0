import { useState, useEffect } from 'react'
import { 
    Box, 
    Typography
} from '@mui/material'

const styles = {
    container: {
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'column'
    }
}

const START_HOUR = '09:00';
const END_HOUR = '17:00';

const Time = () => {
    const [dublinTime, setDublinTime] = useState('')
    
    const getTimeInTimeZone = (timeZone: string) => {
        const now = new Date();

        const timeFormatter = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: timeZone,
            hour12: false
        });
        return timeFormatter.format(now)
    };

    useEffect(() => {
        setDublinTime(
            getTimeInTimeZone('Europe/Dublin')
        );
    }, []);

    const icon = dublinTime >= START_HOUR && dublinTime <= END_HOUR 
        ? '🟢' 
        : '🔴';

    return (
        <>  
            <Box sx={styles.container}>
                <Typography>
                    {`${icon} IE: ${dublinTime}`}
                </Typography>
            </Box>
        </>
    )
}

export default Time