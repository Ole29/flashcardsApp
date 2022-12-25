import React from "react";
import RegistrationInput from "../RegistrationInput/RegistrationInput";
import regStyle from "./RegistrPage.module.css";
import inputSt from "../../EnterPageSection/EnterInput/EnterInput.module.css";
import Menu from "../../MenuSection1/Menu/Menu";

const RegistrPage = () => {

  return (
    <section>
      <Menu/>
      <section className={`${regStyle.container} ${regStyle.photo}`}>
        <div className={regStyle.blue}>
          <div className={regStyle.black}>
            <p className={regStyle.enter}>Зарегистрироваться</p>
            <div className={regStyle.inputs}>
              <p className={inputSt.p}>дата рождения</p>
              <div className={regStyle.data}>
                <input className={regStyle.birthday} type="text" placeholder="Число"></input>
                <input className={regStyle.birthday} type="text" placeholder="Месяц"></input>
                <input className={regStyle.birthday} type="text" placeholder="Год"></input>
              </div>
              <div>
                <RegistrationInput text="Эл.почта" name="Введите электронный адрес"/>
                <RegistrationInput text="Имя" name="Введите электронный адрес" />
                <RegistrationInput text="Фамилия" name="Введите электронный адрес"/>
                <RegistrationInput text="Имя пользователя" name="Введите электронный адрес"/>
                <RegistrationInput text="Пароль" name="Введите электронный адрес" />
              </div>
            </div>
            <button className={regStyle.Button_registr}>
              <a href="/biblioModules" className={regStyle.a}>Зарегистрироваться</a>
            </button>
          </div>
        </div>
      </section>
    </section>
    
  );
};

export default RegistrPage;
