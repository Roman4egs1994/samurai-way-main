import React from 'react';
import styleDialogs from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={styleDialogs.dialogs}>
            <div className={styleDialogs.dialogItems}>
                <div className={styleDialogs.dialog + " " + styleDialogs.active}>
                    <NavLink  to="/dialogs/1">Julia</NavLink>
                </div>
                <div className={styleDialogs.dialog}>
                    <NavLink to="/dialogs/2">Maks</NavLink>
                </div>
                <div className={styleDialogs.dialog}>
                    <NavLink to="/dialogs/3">KirillG</NavLink>
                </div>
                <div className={styleDialogs.dialog}>
                    <NavLink to="/dialogs/4">KirillK</NavLink>
                </div>
                <div className={styleDialogs.dialog}>
                    <NavLink to="/dialogs/5">Sergei</NavLink>
                </div>
            </div>
            <div className={styleDialogs.messages}>
                <div className={styleDialogs.message}>Hi</div>
                <div className={styleDialogs.message}>How us your it-kamasutra</div>
                <div className={styleDialogs.message}>Hello brother. How do you do?</div>
            </div>
        </div>
    );
};

