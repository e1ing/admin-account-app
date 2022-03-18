import {applyMiddleware, combineReducers, createStore} from "redux"
import { appReducer } from "./app-reducer"
import { authReducer } from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import {userReducer} from "./user-reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    user: userReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store;
