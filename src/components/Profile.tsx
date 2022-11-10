import React from "react";
import mainLogo from "../img/main.png";

export const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src={mainLogo} alt="Main Logo"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my post
                <div>New post</div>
            </div>
            <div>
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
            </div>
        </div>

    )
}