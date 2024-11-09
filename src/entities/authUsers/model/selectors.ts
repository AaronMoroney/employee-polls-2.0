import { AppState } from "app/providers/with-redux/types";

export const selectIsAuth = (state: AppState): boolean => {
    return state.isAuth.isAuth
}