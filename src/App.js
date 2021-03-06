import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/music";
import Settings from "./components/Settings/Settings";

const App = (props) => {


    return (
        <div className='app-wrapper'>
            < Header/>
            < Navbar state={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    addPost ={props.addPost}
                    updateNewPost={props.updateNewPost}
                />}/>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.messagePage}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>)
}

export default App;
