import React from "react";
import style from "./AddTermin.module.css";
import img from "../../../img/add.svg";

const AddTermin = (props) => {

    return (
        <section>
            <div className={style.definition}>
                <div className={style.add}>
                    <div className={style.plus}>
                        <img className={style.img} src={img} alt=""/>
                        <p><a href="#">Добавить карточку</a></p>
                    </div>
                    <div className={style.line}>
                        <hr className={style.hr}></hr>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddTermin;