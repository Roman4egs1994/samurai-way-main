import React from "react";
import styleMyPost from './Post.module.css'

type PostType = {
    message: string
}


export const Post = (props: PostType) => {
    return (
        <div>
            <div className={styleMyPost.item}>
                <img
                    src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"
                    alt="avatar"/>
                <span>{props.message}</span>
                <div>
                    <span>like</span>
                </div>

            </div>
        </div>

    )
}