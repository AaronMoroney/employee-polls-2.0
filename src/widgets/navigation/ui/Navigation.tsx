import { 
    Avatar, 
    Box, 
    Paper, 
} from '@mui/material'

const styles = {
    paper: {
        padding: '1% 1% 1% 2%',  
        borderRadius: '30px' 
    }, 
    appBar : {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        width: '100%' 
    },
    userInfo: {
        display: 'flex',  
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    avatar : {
        width: 56, 
        height: 56,
        marginLeft: '10px' 
    }
}

const Navigation = () => {
    return (
        <Paper
            sx={styles.paper}
        >
            <Box sx={styles.appBar}>
                <h1 className='logo'>
                    Oyee-polls
                </h1> 
                <Box sx={styles.userInfo}>
                    <p>username</p>
                    <Avatar sx={styles.avatar}/>
                </Box>
            </Box>
        </Paper>
    )
}

export default Navigation