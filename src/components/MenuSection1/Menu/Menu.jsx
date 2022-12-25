import React from "react";
import Search from "../Search/Search.jsx";
import ButtonEnter from "../Button_Enter/Button_Enter.jsx";
import ButtonRegistr from "../Button_Registr/Button_Registr.jsx";
import style from "./Menu.module.css";
import {NavLink} from "react-router-dom";
import Header from "../Header/Header.jsx";
import app from "../../../App.module.css";


const  Menu = () => {
  return (
    <section className={`${app.main_section} ${app.container}`}>
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
              <li className={style.link}>
                <NavLink  to="/mainPage" className = { navData => navData.isActive ? style.active : style.link }>Главная</NavLink>
              </li>
              <li>
                <Search />
              </li>
              <li>
                <ButtonEnter />
              </li>
              <li>
                <ButtonRegistr />
              </li>
            </ul>
          </nav>
        </div>
      </section>
   
  );
}

export default Menu;
