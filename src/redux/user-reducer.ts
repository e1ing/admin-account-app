type InitialStateType = typeof initialState

type UserType = {
    accountNonExpired: boolean
    accountNonLocked: boolean
    authorities: [{
        authority: string
        description: string
        id: string
    }],
    credentialsNonExpired: boolean
    email: string
    enabled: boolean
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

const initialState = {
    user: {
        accountNonExpired: true,
        accountNonLocked: true,
        authorities: [{
            authority: "",
            description: "",
            id: ""
        }],
        credentialsNonExpired: true,
        email: "",
        enabled: true,
        firstName: "",
        id: "",
        lastName: "",
        middleName: "",
        password: "",
        photoId: "",
        region: {
            id: "",
            name: "",
        }
    },
    photo: ""
}

type UserActionType = ReturnType<typeof setUser>|ReturnType<typeof setUserPhoto>

export const userReducer = (state: InitialStateType = initialState, action: UserActionType) => {
    switch (action.type) {
        case "USER/SET-USER":
            return {...state, user: action.user}
        case "USER/SET-USER-PHOTO":
            return {...state, photo: action.photo}
        default:
            return state
    }
}

const setUser = (user: InitialStateType) => ({type: "USER/SET-USER", user} as const)
const setUserPhoto = (photo: string) => ({type:"USER/SET-USER-PHOTO", photo} as const)

const getUser = (id:string) =>