export interface User {
    id: string,
    password: string,
    name: string,
    avatarURL: null,
    answers: UserAnswers | [],
    questions: string[] | [],
}

export type UsersAction =
    | { type: 'FETCH_USERS_REQUEST'}
    | { type: 'FETCH_USERS_SUCCESS', payload: Record<string, User>}
    | { type: 'FETCH_USERS_FAILURE'};

export type UserAnswers = {
    [key: number]: 'optionOne' | 'optionTwo'
}
   
export interface UsersState {
    users: User[];
}