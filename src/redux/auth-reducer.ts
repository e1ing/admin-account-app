import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type InitialStateType = typeof initialState
export type SetIsLoggedInAT = ReturnType<typeof setIsLoggedIn>
type AuthActionType = SetIsLoggedInAT

const initialState = {
    isLoggedIn: false
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionType) => {
    switch (action.type) {
        case "AUTH/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

export const setIsLoggedIn = (value: boolean) => ({type: "AUTH/SET-IS-LOGGED-IN", value} as const)

export const login = (username: string, password: string) => (dispatch: Dispatch<AuthActionType>) => {
    authAPI.login(username, password)
        .then(res => {
            dispatch(setIsLoggedIn(true))
        })
}

export const logout = () => (dispatch: Dispatch<AuthActionType>) => {
    authAPI.logout()
        .then(res => {
            dispatch(setIsLoggedIn(false))
        })
}