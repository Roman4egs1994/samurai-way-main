import React from "react";
import mainLogo from "./imgProfile/main.png";
import styleP from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPost";

export const Profile = () => {
    return (
        <div className={styleP.content}>
            <div>
                <img src={mainLogo} alt="Main Logo"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPost/>
        </div>

    )
}