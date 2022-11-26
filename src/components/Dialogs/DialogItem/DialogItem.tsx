import styleD from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import styleN from "../../Navbar/Navbar.module.css";

type DialogItemPropsType = {
    name: string
    id: number
}


export const DialogItem = (props: DialogItemPropsType) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={styleD.dialog}>
            <NavLink className={styleD.item}  to={path}>{props.name}</NavLink>
        </div>
    )
}