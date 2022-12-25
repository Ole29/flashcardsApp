import React from "react";
import style from "./CreateModulePage.module.css";
import Menu2 from "../MenuSection2/Menu2";
import { NavLink } from "react-router-dom";
import ModuleName from "./ModuleName/ModuleName";
import TerminDefinition from "./TerminDefinition/TerminDefinition";
import AddTermin from "./AddTermin/AddTermin";
import {addWordsActionCreator, updateNewTermActionCreator, updateNewDefinActionCreator } from '../../redux/cardsData-reducer';


const CreateModulePage = (props) => {
 
  let addWords = () => {
    props.dispatch(addWordsActionCreator());
  };

  let onTerminChange = (e) => {
    let term = e.target.value;
    let action = updateNewTermActionCreator(term);
    props.dispatch(action);     
  } 

  let onDefinitionChange = (e) => {
    let defin = e.target.value;
    let action = updateNewDefinActionCreator(defin);
    props.dispatch(action);     
  } 


  return (
    <section className={style.container}>
      <Menu2 />
      <section className={style.main_section}>
        <div className={style.div1}>
          <p className={style.p}>Создать новый учебный модуль</p>
        </div>
        <div className={style.div2}>
          <ModuleName text="Название" />
          <ModuleName text="Описание" />
        </div>
        <div className={style.maindiv}>
          <TerminDefinition number="1" newTermin = {props.newTermin} newDefinition = {props.newDefinition} onTerm = {onTerminChange} onDefin = {onDefinitionChange}/>
         
          <AddTermin />
        </div>
        <div className={style.but}>
          <button className={style.CreateButton} onClick={addWords}>
            <NavLink
              className={(navData) =>
                navData.isActive ? style.active : style.enter
              }
              to="/CardsPage"
            >
              Создать
            </NavLink>
          </button>
        </div>
      </section>
    </section>
  );
};

export default CreateModulePage;
