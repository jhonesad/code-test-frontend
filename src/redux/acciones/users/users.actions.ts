import { 
    UsersActionType, 
    LIST_ALL, 
    NEW_USER,
    CHANGE_USER_FIELD,
    SET_USER,
    SAVE_USER,
    SET_ERRORS
} from "./users.actiontypes";
import { User } from "../../../componentes/users/model/user";
import { UserRepository } from "../../../api/users.repository";

export function listAll(payload: Array<User>) : UsersActionType {
    return {
        type: LIST_ALL,
        payload: payload
    }
}

export function newUser() : UsersActionType {
    return {
        type: NEW_USER
    }
}

export function changeUserField(field: string, payload: string) : UsersActionType {
    return {
        type: CHANGE_USER_FIELD,
        payload: payload,
        field: field
    }
}

export function setUser(payload: User) : UsersActionType {
    return {
        type: SET_USER,
        payload: payload
    }
}

export function saveUser(payload: User, isNew: boolean) : UsersActionType {
    return {
        type: SAVE_USER,
        payload: payload,
        isNew: isNew
    }
}

export function setErrors(payload: string) : UsersActionType {
    return {
        type: SET_ERRORS,
        payload: payload
    }
}

export function listAllAsync() {
    return function (dispacth: any) {
        UserRepository.list().then((response: any) => {
            dispacth(listAll(response.data));
        });
    }
}

export function saveUserAsync(user: User, isNew: boolean) {
    return function (dispacth: any) { 
        UserRepository.save(user)
            .then((response: any) => {
                dispacth(saveUser(response.data, isNew));
            })
            .catch(error => {
                console.log(error.response.data.message);
                dispacth(setErrors(error.response.data.message));
            });
    }
}

export function uploadAvatarAsync(name: string, data: FormData) {
    return function (dispacth: any) {
        UserRepository.uploadAvatar(name, data).then((response: any) => {
            //
        });
    }
}

export function findUserAsync(name: string) {
    return function(dispacth: any) {
        UserRepository.find(name).then((response: any) => {
            dispacth(setUser(response.data));
        });
    }
}