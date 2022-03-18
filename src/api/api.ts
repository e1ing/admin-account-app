import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    withCredentials: true,
})

//types

type AuthResponseType = {
    id: string
    regionId: string
    name: string
}
export type AuthoritiesType = {
    authority: string
    description: string
    id: string
}
type UserResponseType = {
    accountNonExpired: boolean
    accountNonLocked: boolean
    authorities: Array<AuthoritiesType>
    credentialsNonExpired: boolean
    email: string
    enabled: true
    firstName: string
    id: string
    lastName: string
    middleName: string
    password: string
    photoId: string
    region: {
        id: string
        name: string
    }
}
type GetFileResponseType = {
    description: string
    file: string
    filename: string
    inputStream: Object
    open: boolean
    readable: boolean
    uri: string
    url: string
}
type GetFileListResponceType = {
    content: [
        {
            id: string,
            name: string
        }
    ],
    empty: boolean,
    first: boolean,
    last: boolean,
    number: number,
    numberOfElements: number,
    pageable: {
        offset: number,
        pageNumber: number,
        pageSize: number,
        paged: boolean,
        sort: {
            empty: boolean,
            sorted: boolean,
            unsorted: boolean
        },
        unpaged: boolean
    },
    size: number,
    sort: {
        empty: boolean,
        sorted: boolean,
        unsorted: boolean
    },
    totalElements: number,
    totalPages: number
}

//api
export const authAPI = {
    login(username: string, password: string) {
        const data = new FormData()
        data.set("username", username)
        data.set("password", password)
        return instance.post<AuthResponseType>(`api/login`, data)
    },
    logout() {
        return instance.get(`auth/logout`)
    },
    me() {
        return instance.get<AuthResponseType>(`/api/v1/me`)
    },
    getAuthorities() {
        return instance.get<string>(`/api/v1/me/authorities`)
    }
}

export const userAPI = {
    getUser(id: string) {
        return instance.get<UserResponseType>(`/api/v1/user`)
    }
}

export const fileAPI = {
    getFile(fileId: string) {
        return instance.get<GetFileResponseType>(`api/v1/file/${fileId}`)
    },
    saveFile(file: string) {
        return instance.post(`api/v1/file`)
    },
    getFilesList(number: number, size: number) {
        return instance.get<GetFileListResponceType>(`api/v1/file/list`)
    }
}