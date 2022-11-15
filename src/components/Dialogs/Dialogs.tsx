import React from 'react';
import styleDialogs from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type  DialogPropsType = {
    name: string
    id: number
}

type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
}


const DialogItem = (props: DialogItemPropsType) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={styleDialogs.dialog + " " + styleDialogs.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props: MessagePropsType) => {
    return (
        <div className={styleDialogs.message}>{props.message}</div>
    )
}


export const Dialogs = (props: DialogPropsType) => {
        return (
            <div className={styleDialogs.dialogs}>
                <div className={styleDialogs.dialogItems}>
                    <DialogItem name={'Julia'} id={1}/>
                    <DialogItem name={'Maks'} id={2}/>
                    <DialogItem name={'KirillG'} id={3}/>
                    <DialogItem name={'KirillK'} id={4}/>
                    <DialogItem name={'Sergei'} id={5}/>
                </div>
                <div className={styleDialogs.messages}>
                    <Message message={'hi'}/>
                    <Message message={'How us your it-kamasutra'}/>
                    <Message message={'Hello brother. How do you do?'}/>
                </div>
            </div>
        );
    }
;

