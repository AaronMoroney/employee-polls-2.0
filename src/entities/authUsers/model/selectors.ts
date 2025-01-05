import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "app/providers/with-redux/types";

export const selectIsAuthState = (state: AppState): boolean => {
    return state.isAuth.isAuth
}

export const selectIsAuth = createSelector(
    selectIsAuthState,
    (isAuth) => isAuth
)

export const selectAuthUser = (state: AppState): string => {
    return state.isAuth.authUser
}