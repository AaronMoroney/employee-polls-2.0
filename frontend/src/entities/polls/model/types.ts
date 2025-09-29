export type Option = {
	votes: string[];
	text: string;
};

export interface Poll {
	id: string;
	author: string;
	timestamp: number;
	optionOne: Option;
	optionTwo: Option;
}

export interface PollsState {
	allPolls: Poll[];
	singlePoll: Poll | undefined;
	pending: boolean;
}
