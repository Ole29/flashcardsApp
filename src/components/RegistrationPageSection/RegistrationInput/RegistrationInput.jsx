import React from "react";
import style from "./RegistrationInput.module.css";

const RegistrationInput= (props) => {
    return (
        <div className={style.div}>
            <p className={style.p}>{props.text}</p>
            <input className={style.input} type="text" placeholder={props.name}></input>
        </div>
    );
}

export default RegistrationInput;