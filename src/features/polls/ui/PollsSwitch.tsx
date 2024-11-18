import { FormControlLabel } from '@mui/material'

import { PollsStatusSwitch } from '../style/PollsStatusStyle'

interface PollSwitchProps {
    onClick: () => void; 
}

const styles = {
    container: {
        pr: 1,
    }
}

const PollsSwitch: React.FC<PollSwitchProps> = () => {
    return (
        <>
            <FormControlLabel
                sx={styles.container}
                label="Complete"
                control={<PollsStatusSwitch  />}
                labelPlacement='start'
            />
        </>
    )
}

export default PollsSwitch