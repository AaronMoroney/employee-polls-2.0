import { createSelector } from 'reselect';

import { AppState } from 'app/providers/with-redux/types';

export const selectQuestions = (state: AppState) => state.questions.questions;

export const questionsSelector = createSelector(
    [selectQuestions],
    (questions) => ({ questions })
);
