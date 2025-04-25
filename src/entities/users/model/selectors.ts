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

			const score = user.questions.length + user.answers.length;

            if (score === 0) {
                return 0;
            }

            const total = poll.allPolls.length * 2;
			return Math.floor(( score / total ) * 100);
		}
	);
