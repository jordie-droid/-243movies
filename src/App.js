import React from "react-dom";
import { Route, Switch } from "react-router";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Accueil from "./pages/Accueil";
import Series from "./pages/Series";
import Films from "./pages/Films";
import Acteurs from "./pages/Acteurs";
import { PopularMovieProvider } from "./context/PopularMovie";
import { PopularSeriesProvider } from "./context/PopularSerie";
import { PopularActorsProvider } from "./context/PopularActors";
import Error404 from "./pages/Error404";
import { Footer } from "./components/Footer";
import Recherche from "./pages/Recherche";
import { useState } from "react";

export default function App() {
  let [infoToSearch, setInfoToSearch] = useState("");

  const getInfoToSearch = (info) => {
    setInfoToSearch(info);
  };

  return (
    <>
      <PopularMovieProvider>
        <PopularSeriesProvider>
          <PopularActorsProvider>
            <Header getInfo={getInfoToSearch} />
            <Switch>
              <Route exact path="/" component={Accueil} />
              <Route exact path="/series.html" component={Series} />
              <Route exact path="/films.html" component={Films} />
              <Route exact path="/acteurs.html" component={Acteurs} />
              <Route exact path="/recherche.html" component={()=><Recherche infoToSearch={infoToSearch}/>} />
              <Route component={Error404} />
            </Switch>
            <Footer></Footer>
          </PopularActorsProvider>
        </PopularSeriesProvider>
      </PopularMovieProvider>
    </>
  );
}
