import React from "react";
import styleMyPost from './MyPost.module.css'
import {Post} from "./Post/Post";


export const MyPost = () => {
    return (
        <div>
            <div>
                my post
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
           <div>
               <Post message = {'Hi, how you?'}/>
               <Post message = {"It's my firs post"}/>
           </div>
        </div>
    )
}