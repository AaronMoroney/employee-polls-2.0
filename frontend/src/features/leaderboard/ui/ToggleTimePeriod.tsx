import Chip from '@mui/material/Chip';

const styles = {
    margin: {
        marginRight: '10px'
    }

}

const ToggleTimePeriod = () => {
    return (
        <>
            <Chip sx={styles.margin} label='weekly'/>
            <Chip sx={styles.margin} label='monthly'/>
            <Chip label='all time'/>
        </>
    )
}

export default ToggleTimePeriod