
import './App.module.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './components/MainPageScripts/MainPage/MainPage';
import EnterPage from './components/EnterPageSection/EnterPage/EnterPage';
import RegistrPage from './components/RegistrationPageSection/RegistrPage/RegistrPage';
import BiblioModules from './components/BiblioModulesSection/BiblioModulesPage/BiblioModulesPage';
import CreateModulePage from "./components/CreateModulePage/CreateModulePage";
import CardsPage from "./components/CardsPage/CardsPage";


function App(props) {
  return (
    <BrowserRouter>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      <Routes>
        <Route path="/enter_page" element={<EnterPage />} />
        <Route path="*" element={<MainPage />} />
        <Route path="/registr_page" element={<RegistrPage />} />
        <Route path="/biblioModules" element={<BiblioModules moduleData = {props.state.BiblioModulesPage.moduleData}/> } />
        <Route path="/createModulePage" element={<CreateModulePage dispatch = {props.dispatch} 
        newTermin = {props.state.Cards.newTermin} newDefinition = {props.state.Cards.newDefinition} />}  />
        <Route path="/CardsPage" element={<CardsPage cardsData = {props.state.Cards.cardsData}  moduleName = {props.state.BiblioModulesPage.moduleData}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
