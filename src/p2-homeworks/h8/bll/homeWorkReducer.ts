import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sortUp': {
            return [...state.sort((a, b)=> a.name > b.name ? 1 : -1)]
        }
        case 'sortDown': {
            return [...state.sort((a, b)=> a.name < b.name ? 1 : -1)]
        }
        case "check": {
            return state.filter((a) => a.age > 18)
        }
        default:
            return state
    }
}

export const sortUpAC = () => {
    return {type: "sortUp"} as const
}
export const sortDownAC = () => {
    return {type: "sortDown"} as const
}
export const checkUsersAC = (age:number) => {
    return {type: "check", age} as const
}

type ActionType = ReturnType<typeof sortUpAC>
    | ReturnType<typeof sortDownAC>
    | ReturnType<typeof checkUsersAC>

