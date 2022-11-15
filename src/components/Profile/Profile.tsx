import React from "react";
// import mainLogo from "./imgProfile/main.png";

import styleP from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = () => {
    return (
        <div>
            <div className={styleP.wrapper}>
                <ProfileInfo/>
                <MyPost/>
            </div>
        </div>
    )
}