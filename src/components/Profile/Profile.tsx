import React from "react";
// import mainLogo from "./imgProfile/main.png";

import styleP from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type ProfileType = {
    posts: Array<PostPropsType>
}

type PostPropsType = {
    id:number
    message: string
    likeCount: number
}

export const Profile = (props: ProfileType) => {


    return (
        <div>
            <div className={styleP.wrapper}>
                <ProfileInfo/>
                <MyPost posts = {props.posts}/>
            </div>
        </div>
    )
}