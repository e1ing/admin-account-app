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

//api
export const authAPI = {
    login(username: string, password: string){
        const data = new FormData()
        data.set("username",  username)
        data.set("password",  password)
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
    getUserData(id: string){
        return instance.get(`/api/v1/user`)
    }


}