import { QuestionsState } from 'entities/questions/model/types'
import { UsersState } from 'shared/types/users'
import { AuthState } from 'entities/authUsers/model/types'

export interface AppState {
    questions: QuestionsState
    users: UsersState
    isAuth: AuthState
} 