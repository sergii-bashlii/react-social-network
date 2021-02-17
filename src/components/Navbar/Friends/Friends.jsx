import React from "react";
import s from './Friends.module.css';

const  Friends = (props) => {


    let friend = props.state.map(state=><div className={s.friend}><div><img src={state.image} alt=""/></div><span>{state.name}</span></div>)

    return(
        <div className={s.friends}>
            <div><h3>Friends</h3></div>
            <div>{friend}</div>

        </div>
    )
}

export default Friends;