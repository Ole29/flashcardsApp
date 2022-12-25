import React from "react";
import style from "./BiblioModulesPage.module.css";
import img from "../../../img/ProfilePic.png";
import StudyModule from "../StudyModule/StudyModule";
import Menu2 from "../../MenuSection2/Menu2";
import { NavLink } from "react-router-dom";

const BiblioModules = (props) => {
  let moduleMassive = props.moduleData.map((module) => (
    <StudyModule termin={module.termin} name={module.nameMod} />
  ));

  return (
    <section className={style.container}>
      <Menu2 />
      <section className={style.main_section}>
        <div className={style.profile}>
          <img className={style.icon} src={img} alt="icon" />
          <div className={style.block}>
            <p className={style.user}>User name</p>
            <p className={style.name}>Олеся Соловьева</p>
          </div>
        </div>
        <div className={style.modules}>
          <p>Учебные модули</p>
        </div>
        <button className={style.butRegister}>
          <NavLink className={(navData) => navData.isActive ? style.active : style.enter} to="/createModulePage">
            Создать новый модуль
          </NavLink>
        </button>
        <div className={style.modules}>
          {moduleMassive}
        </div>
      </section>
    </section>
  );
};

export default BiblioModules;
