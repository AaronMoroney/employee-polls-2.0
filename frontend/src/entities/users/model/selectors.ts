import { createSelector } from '@reduxjs/toolkit';

import { AppState } from 'app/providers/with-redux/types';

export const selectUserEngagementScore = (userId: string) =>
	createSelector(
		(state: AppState) => state.users,
		(state: AppState) => state.polls,
		(users, poll) => {
            const user = users.users.find((u) => u.id === userId);
         
            if(!user) {
                return 0;
            }

            // number of questions and answers a user has
            // NB: user cannot ask a poll on another users poll
			const userScore = user.questions.length + user.answers.length;

            if (userScore === 0) {
                return 0;
            }

			return Math.floor(( userScore / poll.allPolls.length ) * 100);
		}
	);
