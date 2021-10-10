const initState: InitStateType = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: ActionCreatorType): InitStateType => {
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme}
        }
        default:
            return state;
    }
};

//action
export const changeThemeAC = (theme: ThemesType) => {
    return {type: "CHANGE_THEME", theme} as const
}

//type
type ActionCreatorType = ReturnType<typeof changeThemeAC>
export type ThemesType = 'dark' | 'red' | 'some'
type InitStateType = {
    theme: ThemesType
}