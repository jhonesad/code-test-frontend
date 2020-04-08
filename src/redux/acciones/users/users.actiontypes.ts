import { User } from "../../../componentes/users/model/user";

export const LIST_ALL = 'LIST_ALL';
export const NEW_USER = 'NEW_USER';
export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';
export const SET_USER = 'SET_USER';
export const SAVE_USER = 'SAVE_USER';
export const SET_ERRORS = 'SET_ERRORS';

interface ListAllAction {
    type: typeof LIST_ALL,
    payload: User[]
}

interface NewUserAction {
    type: typeof NEW_USER
}

interface ChangeUserField {
    type: typeof CHANGE_USER_FIELD,
    payload: string,
    field: string
}

interface SetUser {
    type: typeof SET_USER,
    payload: User
}

interface SaveUser {
    type: typeof SAVE_USER,
    payload: User,
    isNew: boolean
}

interface SetErrors {
    type: typeof SET_ERRORS,
    payload: string
}

export type UsersActionType = ListAllAction 
    | NewUserAction 
    | ChangeUserField
    | SetUser
    | SaveUser
    | SetErrors;