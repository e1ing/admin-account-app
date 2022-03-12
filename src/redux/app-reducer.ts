import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {setIsLoggedIn} from "./auth-reducer";


const initialState = {
    initialized: false
}

type AppInitialStateType = {
    initialized: boolean
}

type AppActionType = ReturnType<typeof setInitialized>

export const appReducer = (state: AppInitialStateType=initialState, action: AppActionType): AppInitialStateType => {
    switch (action.type){
        case 'APP/SET-INITIALIZED':
            return {
                ...state, initialized:action.initialized
            }
        default: return state;
    }
}

export const setInitialized = (initialized: boolean) => ({type: "APP/SET-INITIALIZED", initialized}as const)

export const initializeApp = () => (dispatch: Dispatch) => {
    authAPI.me().then(res=>{
        dispatch(setIsLoggedIn( true))
        dispatch(setInitialized(true))
    })

}

