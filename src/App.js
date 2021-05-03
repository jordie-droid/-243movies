import React from "react-dom";
import { Route } from "react-router";
import Header from "./components/Header";
import "./css/style.css";
import Accueil from "./pages/Accueil";
import Series from "./pages/Series";
import Films from "./pages/Films";
import Acteurs from "./pages/Acteurs";

export default function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={Accueil}/>
      <Route exact path="/Series" component={Series}/>
      <Route exact path="/Films" component={Films}/>
      <Route exact path="/Acteurs" component={Acteurs}/>
    </>
  );
}
