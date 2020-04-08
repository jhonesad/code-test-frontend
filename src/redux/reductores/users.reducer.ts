import { UsersState } from "../modelo/users-state";
import { User } from "../../componentes/users/model/user";
import { 
    UsersActionType, 
    LIST_ALL, 
    NEW_USER,
    CHANGE_USER_FIELD,
    SET_USER,
    SAVE_USER,
    SET_ERRORS
} from "../acciones/users/users.actiontypes";

const newUser: User = {
    id: null,
    name: '',
    description: '',
    createDate: new Date(),
    avatar: null
}

const initialState: UsersState = {
    users: Array<User>(),
    user: newUser,
    errors: ''
};

export default function(state = initialState, action: UsersActionType) : UsersState {
    switch(action.type) {
        case LIST_ALL: {
            const users = action.payload;
            return { ...state, users: users, errors: '' }
        }
        case NEW_USER: {
            return { ...state, user: newUser, errors: ''}
        }
        case CHANGE_USER_FIELD: {
            const user = { ...state.user };
            switch(action.field) {
                case "name": {
                    user.name = action.payload; break;
                }
                case "description": {
                    user.description = action.payload; break;
                }
            }

            return { ...state, user: user, errors: '' }
        }
        case SET_USER: {
            return { ...state, user: action.payload, errors: '' }
        }
        case SAVE_USER: {
            const users = state.users;
            if(action.isNew) {
                users.push(action.payload);
            } else {
                users.forEach(user => {
                    if(user.name === action.payload.name) {
                        user.name = action.payload.name;
                        user.description = action.payload.description; 
                    }
                });
            }

            return {
                users: users,
                user: action.payload,
                errors: ''
            }
        }
        case SET_ERRORS: {
            return {
                ...state,
                errors: action.payload
            }
        }
        default:
            return state;
    }
};