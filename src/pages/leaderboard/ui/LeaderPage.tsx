import * as React from  'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Box } from '@mui/material';
import { Typography } from "@mui/material";

import { Leaderboard, ToggleTimePeriod } from 'features/leaderboard';
import { getUsers } from 'entities/users/model/actions';
import { UsersAction } from 'entities/users/model/types';
import { AppState } from 'app/providers/with-redux/types';

const styles = {
    leader__page__container: {
        marginTop: '30px',
        height: '95%',
        overflow: 'overlay',
        '&::-webkit-scrollbar': {
            width: '1px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent', 
        },
    },
}

const LeaderPage = () => {
    const dispatch = useDispatch<ThunkDispatch<{}, {}, UsersAction>>();
    
    React.useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const users = useSelector((state: AppState) => state.users.users);
    return (
        <>
            <Typography variant='h4'>
                Leaderboard
            </Typography>
            <Box sx={styles.leader__page__container}>
                <ToggleTimePeriod />
                <Leaderboard users={users} />
            </Box>
        </>
    )
}

export default LeaderPage


