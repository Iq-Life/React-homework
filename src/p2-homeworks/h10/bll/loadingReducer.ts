const initState: initStateType = {
    loading: false
}

export const loadingReducer = (state = initState, action: ActionCreatorType):initStateType => {
    switch (action.type) {
        case "LOADING": {
            return {...state, loading: action.lod}
        }
        default: return state
    }
}

export const loadingAC = (lod:boolean):any => {
    return {type:"LOADING", lod } as const
}

type ActionCreatorType = ReturnType <typeof loadingAC>

export type initStateType ={
    loading: boolean
}
