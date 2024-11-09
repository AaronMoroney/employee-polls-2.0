import { 
    Typography, 
    Button, 
    FormControl,
    InputLabel, 
    OutlinedInput, 
    InputAdornment,
    Box, 
    Divider 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const styles = {
    modal__parent: {
        height: '200px',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-around'
    }, 
    question__container : {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-around'
    }
}

const ModalCard = () => {
    return (
        <>
            <Box sx={styles.modal__parent}>
                <FormControl fullWidth >
                    <InputLabel htmlFor="outlined-adornment-amount-1">Option 1</InputLabel>
                    <OutlinedInput
                        startAdornment={<InputAdornment position="start">1</InputAdornment>}
                        label="option1"
                    />
                </FormControl>
                <Box sx={styles.question__container}>
                    <Divider/>
                    <Typography>
                        OR
                    </Typography>
                    <Divider/>
                </Box>
                <FormControl fullWidth >
                    <InputLabel htmlFor="outlined-adornment-amount-2">Option 2</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">2</InputAdornment>}
                        label="option2"
                    />
                </FormControl>
            </Box>
            <Button 
                fullWidth
                variant="contained"
            >
                <AddIcon />
                CREATE POLL
            </Button>
        </>
    )
}

export default ModalCard