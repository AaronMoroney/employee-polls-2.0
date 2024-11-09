import { UsersAction } from '../../../shared/types/users'

const initialUsersState = {
    id:'',
    password: '',
    name: '',
    avatarURL: null,
    answers: {},
    questions: [],
}

export const usersReducer = (
    state = initialUsersState, 
    action: UsersAction
) => {
    switch(action.type) {
        case 'FETCH_USERS_REQUEST':
            return {...state};
        case 'FETCH_USERS_SUCCESS':
            return {...state, users: action.payload};
        case 'FETCH_USERS_FAILURE':
            return {...state};
        default:
            return state;
    }
}