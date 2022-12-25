import React from "react";
import style from "./EnterPage.module.css";
import EnterInput from "../EnterInput/EnterInput";
import ButEnter from "../ButEnter/ButEnter";
import Menu from "../../MenuSection1/Menu/Menu";


const Enter_page = () => {
    return (
        <section>
            <Menu/>
            <section className={`${style.container} ${style.photo}`}>
                <div className={style.blue}>
                    <div className={style.black}>
                        <p className={style.enter}>Вход</p>
                        <div className={style.inputs}>
                            <EnterInput text="эл.почта" name="Введите электронный адрес"/>
                            <EnterInput text="пароль" name="Введите пароль"/>
                        </div>
                        <ButEnter />
                    </div>
                </div>
            </section>
        </section>
        
    );
}

export default Enter_page;