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
import TvTypeResearch from "./pages/tvSections/TvTypeResearch";
import { useState } from "react";
import { GenreSerieProvider } from "./context/GenreSerie";
import { GenreMovieProvider } from "./context/GenreFilm";
import FilmTypeResearch from "./pages/FilmSections/FilmTypeResearch";

export default function App(props) {
  let [infoToSearch, setInfoToSearch] = useState("");
  let [genreTvId, setGenreTvId] = useState(0);
  let [genreMovieId, setGenreMovieId] = useState(0);

  const getInfoToSearch = (info) => {
    setInfoToSearch(info);
  };

  const getGenreId = (id) => {
    setGenreTvId(id);
  };

  const getGenreMovie = (id) => {
    setGenreMovieId(id);
  };

  return (
    <>
      <PopularMovieProvider>
        <PopularSeriesProvider>
          <PopularActorsProvider>
            <GenreSerieProvider>
              <GenreMovieProvider>
                <Header getInfo={getInfoToSearch} />
                <Switch>
                  <Route exact path="/" component={Accueil} />
                  <Route
                    exact
                    path="/series.html"
                    component={() => <Series getGenreId={getGenreId} />}
                  />
                  <Route
                    exact
                    path="/films.html"
                    component={() => <Films getGenreId={getGenreMovie} />}
                  />
                  <Route exact path="/acteurs.html" component={Acteurs} />
                  <Route
                    exact
                    path="/recherche.html"
                    component={() => <Recherche infoToSearch={infoToSearch} />}
                  />
                  <Route
                    exact
                    path="/tvTypeResearch.html"
                    component={() => <TvTypeResearch genreId={genreTvId} />}
                  />
                  <Route
                    exact
                    path="/movieTypeResearch.html"
                    component={() => (
                      <FilmTypeResearch genreMovieId={genreMovieId} />
                    )}
                  />
                  <Route component={Error404} />
                </Switch>
                <Footer></Footer>
              </GenreMovieProvider>
            </GenreSerieProvider>
          </PopularActorsProvider>
        </PopularSeriesProvider>
      </PopularMovieProvider>
    </>
  );
}
