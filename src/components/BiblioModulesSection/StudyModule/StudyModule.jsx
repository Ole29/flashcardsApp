import React from "react";
import style from "./StudyModule.module.css";

const StudyModule = (props) => {

    return (
        <div className={style.module}>
            <div>
                <p className={style.number}>{props.termin } терминов</p>
            </div>
            <div>
                <p className={style.name}>{props.name}</p>
            </div>
        </div>
    );
}

export default StudyModule;