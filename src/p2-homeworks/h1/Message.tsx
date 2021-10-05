import React from "react";
import {MessageDataType} from "./HW1";
import style from './Message.module.css'

function Message(props: MessageDataType) {

    return (
        <div className={style.MessageAll}>
            <img
                className={style.ava}
                src={props.avatar} width="50" height="50"
                alt="ava"
            />
            <div className={style.mes}>
                <div className={style.nic}>{props.name}</div>
                <div className={style.message}>{props.message}</div>
                <div className={style.tim}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
