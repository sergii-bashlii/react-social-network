import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/MyPost.jsx";

const MyPosts = (props) => {


    let messagesItems = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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