import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi! How are you?', likesCount: 11},
    {id: 2, message: 'Hi! What\'s up?', likesCount: 12},
    {id: 3, message: 'Hi! Howdy!', likesCount: 13},
    {id: 4, message: 'It\'s my first post', likesCount: 21}
]

let dialogs = [
    {id: 1, name: 'Sacha'},
    {id: 2, name: 'Victor'},
    {id: 3, name: 'Valera'},
    {id: 4, name: 'Anna'},
    {id: 5, name: 'Olga'},
    {id: 6, name: 'Ksusha'}
]


let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'}
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
