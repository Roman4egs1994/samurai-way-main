import React from 'react';
import styleDialogs from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType, MessagesPropsType} from "../../App";

type DialogsType = {
    dialogs: Array<DialogsPropsType>
    messages: Array<MessagesPropsType>
}



export const Dialogs = (props: DialogsType) => {


        let dialogsElements = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
        let messagesElements = props.messages.map(el => <Message key={el.id} message={el.message}/>)

        return (
            <div className={styleDialogs.dialogs}>
                <div className={styleDialogs.dialogItems}>
                    {dialogsElements}
                </div>
                <div>
                    {messagesElements}
                </div>
            </div>
        );
    }
;

