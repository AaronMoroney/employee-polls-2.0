import { createSelector } from 'reselect';

import { AppState } from 'app/providers/with-redux/types';

export const selectAlert = (state: AppState) => state.alert;

export const alertSelector = createSelector([selectAlert], (alert) => alert);
