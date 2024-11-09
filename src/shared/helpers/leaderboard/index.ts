import { User } from 'entities/users/model/types';

export const getUserEngagementScore = (answers: {}, questions: string[]) => {
    const questionsTally = questions.length;
    const answersTally = Object.keys(answers).length;
    const engagement = questionsTally + answersTally
  
    return engagement
}
  
export const findUserPosition = (users: User[]) => {
    const usersWithScores = users.map((user) => {
        const score = getUserEngagementScore(user.answers, user.questions);
        return { ...user, score };
    });
    
    return  usersWithScores.sort((a, b) => b.score - a.score);
}