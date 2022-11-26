import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import mainLogo from "./components/Profile/imgProfile/main.png";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";


export type appStateType = {
   state: {
        profilePage: {
            posts: Array<PostPropsType>
        }
        dialogsPage: {
            messages: Array<MessagesPropsType>
            dialogs: Array<DialogsPropsType>
        }
    }
}

type PostPropsType = {
    id:number
    message: string
    likeCount: number
}

export type DialogsPropsType = {
    id: number
    name: string
}

export type MessagesPropsType = {
    id: number
    message: string
}


function App(props:appStateType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <div>
                        <img src={mainLogo} alt="Main Logo"/>
                    </div>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}

                    <Route path='/dialogs' render={()=><Dialogs dialogs ={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                    <Route path='/profile' render={()=><Profile posts={props.state.profilePage.posts}/>}/>



                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
