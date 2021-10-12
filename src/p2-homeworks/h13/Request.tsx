import React, {useState} from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {InitialStateType, sendRequestTC, setSuccess} from "./request-reducer";


function Request() {
    const [alert, setAlert] = useState<string>("")
    const SuccessStatus = useSelector<AppStoreType, InitialStateType>(state => state.requestReducer)
    const dispatch = useDispatch()

    const clickButton = () => {
        if (SuccessStatus.success) {
            sendRequestTC()
        } else {
            setAlert("checkbox not pressed")
        }
    }

    const onChangeCallback = (value: boolean) => {
        dispatch(setSuccess(value))
        setAlert("")
    }

    return (
        <div>
            <SuperCheckbox onChangeChecked={onChangeCallback}/>
            <SuperButton onClick={clickButton} title={"Send"}/>
            <div>{SuccessStatus.errorText}</div>
            {SuccessStatus.errorText? <div>{SuccessStatus.errorText}</div> :<div>{alert}</div>}
        </div>
    )
}

export default Request
