import { 
    Paper, 
    Box
} from "@mui/material";

import { 
    Time,
    TodaysDate, 
    Engagement,
} from 'widgets/calender'

const styles = {
    root: {
        display: 'flex', 
        flexDirection: 'column', 
        width: '20vh'
    },
    paper: {
        height: '14vh',
        marginTop: '30px', 
        borderRadius: '30px', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        padding: '10px 10px 10px 15px'
    }, 
}

const Widgetbar = () => {
    return (
        <Box sx={styles.root}>
            <Paper sx={styles.paper}>
                <Time />
            </Paper>
            <Paper sx={styles.paper}>
                <TodaysDate />
            </Paper>
            <Paper sx={styles.paper}>
               <Engagement />
            </Paper>
        </Box>
    );
}

export default Widgetbar