import React from "react";

let rerenderEntireTree = () => {
    console.log('State was changed!');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 11},
            {id: 2, message: 'Hi! What\'s up?', likesCount: 12},
            {id: 3, message: 'Hi! Howdy!', likesCount: 13},
            {id: 4, message: 'It\'s my first post', likesCount: 21}
        ],
        newPostText: 'it-camasutra.com'

    },
    messagePage: {
        dialogs: [
            {id: 1, name: 'Sacha'},
            {id: 2, name: 'Victor'},
            {id: 3, name: 'Valera'},
            {id: 4, name: 'Anna'},
            {id: 5, name: 'Olga'},
            {id: 6, name: 'Ksusha'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'}
        ],

    },
    sidebar: [
        {id: 1, image: 'https://i.pinimg.com/564x/04/a8/73/04a87347b071ec062a586e02c23f6221.jpg', name: 'Serhii'},
        {id: 2, image: 'https://i.pinimg.com/564x/1f/b7/ed/1fb7edac8c1c8b4675c6e5a65f1081c5.jpg', name: 'Andrii'},
        {id: 3, image: 'https://i.pinimg.com/564x/f3/d0/b9/f3d0b93943cebece6e0e66babf8c04b6.jpg', name: 'Yura'}
    ]
}



export const addPost = () => {
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likesCounter:15
    };
    state.profilePage.posts.push(newPost);
     state.profilePage.newPostText ='';
    rerenderEntireTree(state);

};

export const updateNewPost = (newPost) => {
    state.profilePage.newPostText = newPost;
    rerenderEntireTree(state);

};

export const subscribe = (observer) =>{
rerenderEntireTree = observer;
}

export default state;