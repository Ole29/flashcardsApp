import React from "react";
import style from "./TerminDefinition.module.css";
import basketImg from "../../../img/basket.svg";
import Termin from "../Termin/Termin";
import Definition from "../Definition/Definition";

const TerminDefinition = (props) => {

    return (
        <section>
            <div className={style.definition}>
                <div className={style.numberDiv}>
                    <p className={style.number}>{props.number}</p>
                    <img src={basketImg} alt="basket" className={style.basket}/>
                </div>
                <hr className={style.hr}></hr>
                <div className={style.termin}>
                    <Termin text="Термин"   newTermin = {props.newTermin} onTerm = {props.onTerm}/>
                    <Definition text="Определение" newDefinition = {props.newDefinition} onDefin = {props.onDefin}/>
                </div>
            </div>
        </section>
        
    );
}

export default TerminDefinition;