import React from "react";
import styleMyPost from './MyPost.module.css'
import {Post} from "./Post/Post";
import avatar from './img/Avatar.png'
import like from './img/like.svg'


export const MyPost = () => {
    return (
        <div>
            {/*<div className={styleMyPost.post}>*/}
            {/*    <p className={styleMyPost.descrP}>My Post:</p>*/}
            {/*    <div className={styleMyPost.areaBlock}>*/}
            {/*        <textarea  className={styleMyPost.area}></textarea>*/}
            {/*        <button className={styleMyPost.btnAdd}>Add post</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
           <div>
               <Post avatar={avatar} message = {'Hi, how you?  Hi, how you? Hi, how you?' } like={like}/>
               <Post avatar={avatar} message = {"It's my firs post"} like={like}/>
           </div>
        </div>
    )
}