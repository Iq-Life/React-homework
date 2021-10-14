import {RequestApi} from "./Request-api";

let initialState: InitialStateType = {
    success: false,
    /*errorText: null*/
}
export const requestReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "SET_SUCCESS":
            return {...state, success: action.value}
        /*case "SET_ERROR_TEXT":
            return {...state, errorText: action.value}*/
        default:
            return state
    }
}

//action
export const setSuccess = (value: boolean) => {
    return {type: "SET_SUCCESS", value} as const
}
/*export const setErrorText = (value: string) => {
    return {type: "SET_ERROR_TEXT", value} as const
}*/

//thunk
/*export const sendRequestTC = async () => {
    try {
        const res = await RequestApi.postRequest()
        if (res.status === 200) {
            setErrorText(res.data.info)
            console.log(res.data.info)

        }
    } catch (error: any) {
        setErrorText(error.response ? error.response.data.errorText : error.message)
        console.error(error.response ? error.response.data.errorText : error.message)
    }
}*/
//type
export type InitialStateType = { success: boolean/*, errorText: null | string */}
type ActionTypes = ReturnType<typeof setSuccess>/*|ReturnType<typeof setErrorText>*/

