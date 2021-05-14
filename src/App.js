import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Accueil from "./pages/Accueil";
import Series from "./pages/Series";
import Films from "./pages/Movies";
import Acteurs from "./pages/Acteurs";
import Error404 from "./pages/Error404";
import Recherche from "./pages/Recherche";
import TvTypeResearch from "./pages/tvSections/TvTypeResearch";
import SearchMoviesGenre from "./pages/FilmSections/SearchMoviesGenre";
import VoirPlusActeur from "./pages/VoirPlusCelebrite";
import MovieShowMore from "./pages/MovieShowMore";
import SerieShowMore from "./pages/SerieShowMore";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <BrowserRouter>
        <Header getTerm={(term) => setSearchTerm(term)} />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route
            exact
            path="/series.html"
            component={() => (
              <Series/>
            )}
          />
          <Route
            exact
            path="/films.html"
            component={() => <Films/>}
          />
          <Route exact path="/acteurs.html" component={Acteurs} />
          <Route
            exact
            path="/recherche.html"
            component={() => <Recherche searchTerm={searchTerm} />}
          />
          <Route
            exact
            path="/tvTypeResearch.html"
            component={() => <TvTypeResearch/>}
          />
          <Route
            exact
            path="/searchMovieByGenre/:id"
            component={SearchMoviesGenre}
          />
          <Route
            exact
            path="/showMoreCelebrity/:id"
            component={VoirPlusActeur}
          />
          <Route
            exact
            path="/movieShowMore/:id"
            component={() => <MovieShowMore />}
          />

          <Route exact path = "/serieShowMore/:id" component={SerieShowMore}/>
          <Route component={Error404} />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
