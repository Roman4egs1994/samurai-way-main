import React from "react";
import styleMyPost from './MyPost.module.css'
import {Post} from "./Post/Post";
import avatar from './img/Avatar.png'
import like from './img/like.svg'

type MyPostProps = {
    posts: Array<PostsTypeProps>
}

type PostsTypeProps = {
    id: number
    message: string
    likeCount: number
}


export const MyPost = (props: MyPostProps) => {


    let postsElements = props.posts.map(el=><Post key={el.id} avatar={avatar} message = {el.message} like={like}/> )

    return (
        <div>
            <div className={styleMyPost.post}>
                <p className={styleMyPost.descrP}>My Post:</p>
                <div className={styleMyPost.areaBlock}>
                    <textarea  className={styleMyPost.area}></textarea>
                    <button className={styleMyPost.btnAdd}>Add post</button>
                </div>
            </div>
           <div>
               {postsElements}
           </div>
        </div>
    )
}