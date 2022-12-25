import React from "react";
import Search from "../MenuSection1/Search/Search";
import style from "./Menu2.module.css";
import { NavLink } from "react-router-dom";
import Header from "../MenuSection1/Header/Header";
import app from "../../App.module.css";
import CreateButton from "./CreateButton/CreateButton";
import img from "../../img/ProfilePic.png";

const Menu2 = () => {
  return (
     <section>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <div className={app.nav_menu}>
        <Header />
        <nav>
          <ul className={style.items}>
            <li>
              <Search />
            </li>
            <li className={style.link}>
              <NavLink to="/biblioModules" className={(navData) => navData.isActive ? style.active : style.link}>Библиотека модулей</NavLink>
            </li>
            <li>
                <CreateButton/>
            </li>
            <li>
                <img className={style.icon} src={img} alt="icon" />
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Menu2;
