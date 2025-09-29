import * as React from 'react';
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from 'app/providers/with-redux/types';
import { getUsers } from './actions';
import { selectUserEngagementScore } from './selectors';

export function useUsersState() {
    return useSelector((state: AppState) => ({
        users: state.users.users, 
        selectUserEngagementScore: selectUserEngagementScore,
    }));
}

export function useUsersActions() {
    const dispatch = useDispatch();

    const boundActions = React.useMemo(
        () => 
            bindActionCreators({
                getUsers,
            }, 
            dispatch
        ),
        [dispatch]
    );

    return boundActions;
}