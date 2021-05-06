import React, { useContext } from "react";
import Populaire from "./homeSections/Populaire";
import { PopularMovieContext } from "../context/PopularMovie";
import HomeSlider from "./homeSections/HomeSlider";
import Series from "./homeSections/Series";
import Films from "./homeSections/Films";
import Actors from "./homeSections/Actors";
import { PopularSerieContext } from "../context/PopularSerie";
import { PopularActorsContext } from "../context/PopularActors";
import { Footer } from "../components/Footer";

export default function Accueil() {
  const [PopularMoviesData] = useContext(PopularMovieContext);
  const [PopularSeriesData] = useContext(PopularSerieContext);
  const [PopularActors] = useContext(PopularActorsContext);
  const popularMoviesData = PopularMoviesData.results;
  const popularSeriesData = PopularSeriesData.results;
  const popularActors = PopularActors.results;

  const showHomePage = () => {
    if (PopularMoviesData.length === 0) {
      return (
        <div className="loader-container">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <HomeSlider data={popularMoviesData}></HomeSlider>
          <Populaire data={popularMoviesData}></Populaire>
          <Series data={popularSeriesData}></Series>
          {/* <Films></Films> */}
          <Actors data={popularActors}></Actors>
          <Footer></Footer>
        </>
      );
    }
  };
  return <>{showHomePage()}</>;
}
