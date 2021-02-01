import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/MyPost.jsx";

const MyPosts = (props) => {

    return(
    <div>
        My posts
        <div>
            <textarea></textarea>
            <button>New post</button>
        </div>
        <div className={s.posts}>
            <Post message='Hi! How are you?' likesCount='10' />
            <Post message="It's my first post" likesCount='20' />
        </div>
    </div>)
}
export default MyPosts;