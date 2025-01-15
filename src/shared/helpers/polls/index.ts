import { Poll } from 'entities/questions/model/types';

export const checkHasVoted = (
    poll: Poll | undefined, 
    userId: string
) => {
    if (!poll) {
        return false
    }

    const { optionOne, optionTwo } = poll;

    if (optionOne.votes.includes(userId)) {
        return true;
    }

    if (optionTwo.votes.includes(userId)) {
        return true;
    }

    return false;
}

export const calculateOptionPercentage = (
    votes: number, 
    total: number
) => {
    if(total === 0) {
        return 0;
    }
    
    return Math.round((votes / total) * 100);
}