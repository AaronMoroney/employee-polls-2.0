import { FormControlLabel } from '@mui/material'

import { PollsStatusSwitch } from '../style/PollsStatusStyle'

interface PollSwitchProps {
    onClick: () => void; 
}

const PollsSwitch: React.FC<PollSwitchProps> = () => {
    return (
        <>
            <FormControlLabel
                control={<PollsStatusSwitch  />}
                label="Show Complete"
            />
        </>
    )
}

export default PollsSwitch