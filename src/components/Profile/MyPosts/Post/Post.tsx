import React from "react";
import styleMyPost from './Post.module.css'
import Avatar from './img/Avatar.png'

type PostType = {
    message: string
}


export const Post = (props: PostType) => {
    return (
        <div>
            <div className={styleMyPost.item}>
                <img src={Avatar} alt="avatar"/>
                    <p className={styleMyPost.postText}>{props.message}</p>


                {/*<div>*/}
                {/*    <span>like</span>*/}
                {/*</div>*/}

            </div>
        </div>

    )
}