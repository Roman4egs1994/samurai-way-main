import React from "react";

import Avatar from "./img/Avatar.png"
import styleP from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div className={styleP.descriptionProfile}>
                <div className={styleP.avatar}>
                    <img src={Avatar} alt="avatar"/>
                </div>
                <div className={styleP.dataProfile}>
                    <h2>Roman Rybkin</h2>
                    <p><strong>Date of Birth:</strong> 13 january</p>
                    <p><strong>Citi:</strong> Ulyanovsk</p>
                    <p><strong>Web Site:</strong> <a href="https://it-kamasutra.com">https://it-kamasutra.com</a></p>
                </div>
            </div>
        </div>
    )
}