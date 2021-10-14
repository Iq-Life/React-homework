import React, {useState} from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {InitialStateType, setSuccess} from "./request-reducer";
import {RequestApi} from "./Request-api";


function Request() {
    const SuccessStatus = useSelector<AppStoreType, InitialStateType>(state => state.requestReducer)
    const dispatch = useDispatch()
    const [errorText, setErrorText] = useState<string | null>(null)

    const clickButton = () => {
        if (SuccessStatus.success) {
            RequestApi.postRequest()
                .then(response => {
                    setErrorText(response.data.errorText)
                })
        } else {
            setErrorText("checkbox not pressed")
        }
    }

    const onChangeCallback = (value: boolean) => {
        dispatch(setSuccess(value))
        setErrorText("")
    }

    return (
        <div>
            <SuperCheckbox onChangeChecked={onChangeCallback}/>
            <SuperButton onClick={clickButton} title={"Send"}/>
            {errorText ? <div>{errorText}</div> :<div/>}
        </div>
    )
}

export default Request
