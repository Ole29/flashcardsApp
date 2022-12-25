import React from "react";
import style from "../Termin/Termin.module.css";

const Definition = (props) => {

    return (
        <div className={style.div}>
            <input  onChange = {props.onDefin} newDefinition = {props.newDefinition} className={style.input} type="text" placeholder={props.name}></input>
            <p className={style.p}>{props.text}</p>
        </div>
    );
}

export default Definition;