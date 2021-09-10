import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    const priorityClass = s.item + ' ' + s[props.affair.priority]
    return (
        <div className={s.box}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>

            <button onClick={deleteCallback} className={s.button}>X</button>
        </div>
    )
}

export default Affair
