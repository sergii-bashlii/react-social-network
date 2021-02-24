import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe, updateNewPost} from './redux/state'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

// addPost('Путь самурая');

let rerenderEntireTree = (state) =>{
    ReactDOM.render(
            <BrowserRouter>
                <App state={state} addPost = {addPost} updateNewPost={updateNewPost}/>
            </BrowserRouter>, document.getElementById('root')
    );
}


rerenderEntireTree(state);

subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



reportWebVitals();
