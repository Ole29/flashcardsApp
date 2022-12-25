import React from "react";
import style from "./ButtonRegistrNow.module.css";
import {NavLink} from "react-router-dom";


const Button_Registr_now = () => {
    return (
        <button className={style.button}>
            <NavLink  to="/registr_page">Зарегистрироваться сейчас</NavLink>
        </button>
    );
}

export default Button_Registr_now;