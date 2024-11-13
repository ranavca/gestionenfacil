import { User } from '@/@types/api'
import ApiService from './ApiService'

export async function createPersonal(user: Omit<User, 'id'>) {
    return ApiService.fetchData({
        url: '/usuarios',
        method: 'post',
        data: user,
    })
}

export async function findPersonal() {
    return ApiService.fetchData<User[]>({
        url: '/usuarios',
        method: 'get',
    })
}

export async function deletePersonal(user: User) {
    return ApiService.fetchData({
        url: `/usuario/${user.id}`,
        method: 'delete',
    })
}
