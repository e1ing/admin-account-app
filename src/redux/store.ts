import {applyMiddleware, combineReducers, createStore} from "redux"
import { appReducer } from "./app-reducer"
import { authReducer } from "./auth-reducer"
import thunkMiddleware from "redux-thunk"

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store;
