import * as React from 'react';
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import {
    addUsers,
    addUsersSuccess,
    addUsersFailure,
    loginUsers,
    loginUsersSuccess,
    loginUsersFailure,
    logoutUser, 
} from './actions';
import { selectIsAuth } from './selectors';

export function useIsAuthState() {
    return useSelector(selectIsAuth);
}

export const useUserActions = () => {
    const dispatch = useDispatch();

    const boundActions = React.useMemo(
        () => 
            bindActionCreators({
                addUsers,
                addUsersSuccess,
                addUsersFailure,
                loginUsers,
                loginUsersSuccess,
                loginUsersFailure,
                logoutUser,
            }, 
            dispatch
        ),
        [dispatch]
    );

    return boundActions;
}