import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/MyPost.jsx";

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi! How are you?', likesCount: 11},
        {id: 2, message: 'Hi! What\'s up?', likesCount: 12},
        {id: 3, message: 'Hi! Howdy!', likesCount: 13},
        {id: 4, message: 'It\'s my first post', likesCount: 21}
    ]

    let messagesItems = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>New post</button></div>
            </div>
            <div className={s.posts}>
                {messagesItems}
            </div>
        </div>)
}
export default MyPosts;