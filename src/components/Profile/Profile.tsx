import React from "react";
// import mainLogo from "./imgProfile/main.png";
import Avatar from "./imgProfile/Avatar.png"
import styleP from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPost";


// type ProfileType = {
//     name: string
// }


export const Profile = () => {
    return (
        // <div className={styleP.content}>
        <div>
            {/*<div>*/}
            {/*    <img  src={mainLogo} alt="Main Logo"/>*/}
            {/*</div>*/}

            <div className={styleP.wrapper}>
                <div className={styleP.descriptionProfile}>
                    <div className={styleP.avatar}>
                        <img src={Avatar} alt="avatar"/>
                    </div>
                    <div className={styleP.dataProfile}>
                        <h2>Roman Rybkin</h2>
                        <p><strong>Date of Birth:</strong>  13 january</p>
                        <p><strong>Citi:</strong>   Ulyanovsk</p>
                        <p><strong>Web Site:</strong>  <a href="https://it-kamasutra.com">https://it-kamasutra.com</a></p>
                    </div>
                </div>
                <MyPost/>
            </div>
        </div>
    )
}