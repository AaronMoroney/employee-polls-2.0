import * as React from 'react';
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from 'app/providers/with-redux/types';
import { getUsers } from './actions';

export function useUsersState() {
    return useSelector((state: AppState) => state.users);
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