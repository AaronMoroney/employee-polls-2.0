import { 
    Paper, 
    Box
} from "@mui/material";

import { 
    Time,
    TodaysDate, 
    Engagement,
} from 'widgets/calender'

const Widgetbar = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', width: '20vh'}}>
            <Paper
                sx={{ 
                    height: '14vh',
                    marginTop: '30px', 
                    borderRadius: '30px', 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    padding: '10px 10px 10px 15px'
                }}
            >
                <Time />
            </Paper>
            <Paper
                sx={{ 
                    height: '14vh',
                    marginTop: '30px', 
                    borderRadius: '30px', 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    padding: '10px 10px 10px 15px'
                }}
            >
                <TodaysDate />
            </Paper>
            <Paper
                sx={{ 
                    height: '14vh',
                    marginTop: '30px', 
                    borderRadius: '30px', 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    padding: '10px 10px 10px 15px'
                }}
            >
               <Engagement />
            </Paper>
        </Box>
    );
}

export default Widgetbar