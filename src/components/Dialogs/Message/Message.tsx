import styleM from "./Messages.module.css";
import React from "react";


type MessagePropsType = {
    message: string
}

export  const Message = (props: MessagePropsType) => {
    return (
        <div className={styleM.message}>{props.message}</div>
    )
}
