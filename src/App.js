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

export default function App() {
  return (
    <>
      <PopularMovieProvider>
        <PopularSeriesProvider>
          <PopularActorsProvider>
            <Header />
            <Switch>
              <Route exact path="/" component={Accueil} />
              <Route exact path="/series.html" component={Series} />
              <Route exact path="/films.html" component={Films} />
              <Route exact path="/acteurs.html" component={Acteurs} />
              <Route component={Error404} />
            </Switch>
          </PopularActorsProvider>
        </PopularSeriesProvider>
      </PopularMovieProvider>
    </>
  );
}
