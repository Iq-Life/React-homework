import React from "react";
import Message from "./Message";

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function HW1() {
    const messageData = {
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        name: "Artem",
        message: "npm start нажимал ?",
        time: "20:00",
    };
    return (
        <div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            {/*для личного творчества, могу проверить
            <AlternativeMessage/>*/}
        </div>
    );
}

export default HW1;
