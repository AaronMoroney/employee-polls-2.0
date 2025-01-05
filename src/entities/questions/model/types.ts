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
