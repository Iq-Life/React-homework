import React, {useState} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeAC, ThemesType} from "./bll/themeReducer";

const themes: Array<ThemesType> = ['dark', 'red', 'some']

function HW12() {
    const [value, onChangeOption] = useState<string>(themes[1])

    const ThemeState = useSelector<AppStoreType, ThemesType>(state => state.themeReducer.theme)
    const dispatch = useDispatch()

    const onChangeCallback = (value: ThemesType) => {
        dispatch(changeThemeAC(value))
    }

    return (
        <div>
            <div className={s[ThemeState]}>
            <span className={s[ThemeState + '-text']}>
                homeworks 12
            </span>

                {/*should work (должно работать)*/}
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={value}
                    onChangeOption={onChangeOption}
                    onChangeCall={onChangeCallback}/>
            </div>
        </div>
    );
}

export default HW12;
