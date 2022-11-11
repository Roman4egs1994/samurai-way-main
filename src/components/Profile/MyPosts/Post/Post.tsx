import React, {useState} from "react";
import styleMyPost from './Post.module.css'


type PostType = {
    message: string
    avatar: string
    like: string
}


export const Post = (props: PostType) => {

    let [counter , setCounter] = useState(0)
    const onclickC = () => {
        setCounter(++counter);
    }

    return (
        <div>
            <div className={styleMyPost.item}>
                <img src={props.avatar} alt="avatar"/>
                <p className={styleMyPost.postText}>{props.message}</p>
                <div className={styleMyPost.like}>
                    <img onClick={onclickC} src={props.like} alt="like"/>
                </div>
                <span className={styleMyPost.counter}>{counter}</span>
            </div>
        </div>
    )
}