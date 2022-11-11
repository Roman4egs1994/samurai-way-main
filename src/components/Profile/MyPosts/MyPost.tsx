import React from "react";
import styleMyPost from './MyPost.module.css'
import {Post} from "./Post/Post";


export const MyPost = () => {
    return (
        <div>
            <div className={styleMyPost.post}>
                <p className={styleMyPost.descrP}>My Post:</p>
                <div className={styleMyPost.areaBlock}>
                    <textarea className={styleMyPost.area}></textarea>
                    <button className={styleMyPost.btnAdd}>Add post</button>
                </div>
            </div>
           <div>
               <Post message = {'Hi, how you?sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'}/>
               <Post message = {"It's my firs post"}/>
           </div>
        </div>
    )
}