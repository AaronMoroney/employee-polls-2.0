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
import { selectIsAuth, selectAuthUser, selectAuthUserId } from './selectors';
import { AppState } from 'app/providers/with-redux/types';

export function useIsAuthState() {
    return useSelector((state: AppState) => ({
        selectIsAuth: selectIsAuth(state),
        selectAuthUser: selectAuthUser(state),
        selectAuthUserId: selectAuthUserId(state),
    }));
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