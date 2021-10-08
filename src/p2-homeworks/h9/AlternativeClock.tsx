import React, {useState} from 'react'
import s from "./Clock.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function AlternativeClock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }


    const gwt2digitsString = (num: number) => num < 10 ? "0" + num : num
    const stringTime = <div>
        <span>{gwt2digitsString(date.getHours())} : </span>
        <span>{gwt2digitsString(date.getMinutes())} : </span>
        <span>{gwt2digitsString(date.getSeconds())}</span>
    </div>
    const stringDate = <div>
        <span>{gwt2digitsString(date.getDay())} : </span>
        <span>{gwt2digitsString(date.getMonth())} : </span>
        <span>{gwt2digitsString(date.getFullYear())}</span>
    </div>

    return (
        <div className={s.general}>
            <div
                className={s.time}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.date}>
                    {stringDate}
                </div>
            )}
            <div>
                <SuperButton title={"start"} onClick={start}/>
                <SuperButton title={"stop"} onClick={stop}/>
            </div>

        </div>
    )
}
export default AlternativeClock
