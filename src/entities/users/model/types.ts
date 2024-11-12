export interface User {
    id: string,
    password: string,
    name: string,
    avatarURL: null,
    answers: UserAnswers | [],
    questions: string[] | [],
}

export type UserAnswers = {
    [key: number]: 'optionOne' | 'optionTwo'
}
   
export interface UsersState {
    users: User[];
}