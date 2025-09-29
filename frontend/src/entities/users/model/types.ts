export interface User {
    id: string,
    password: string,
    email: string,
    avatarURL: null,
    answers: string[] | [],
    questions: string[] | [],
    engagement: number,
}

export interface UsersState {
    users: User[];
}