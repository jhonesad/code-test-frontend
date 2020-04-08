import { User } from '../../componentes/users/model/user';

export interface UsersState {
    users: User[];
    user: User;
    errors: string;
}