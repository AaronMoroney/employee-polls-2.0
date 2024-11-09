export type Question = {
    votes: string[],
    text: string
};

export interface Questions {
    id: string;
    author: string;
    timestamp: number;
    optionOne: Question;
    optionTwo: Question;
};

export type QuestionsState = {
    questions: Record<string, Questions>;
};