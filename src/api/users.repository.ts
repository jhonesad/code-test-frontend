import { axiosIntance } from '../config/axios.config';
import { User } from '../componentes/users/model/user';

export const UserRepository = {
    list: () => axiosIntance.get('/users/'),
    find: (name: string) => axiosIntance.get(`/users/${name}`),
    save: (user: User) => axiosIntance.post('/users/', user),
    uploadAvatar: (name: string, data: FormData) => axiosIntance.post(`/users/upload/${name}`, data)
}