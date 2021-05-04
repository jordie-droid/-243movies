import React, { useContext } from "react";
import Populaire from "./homeSections/Populaire";
import Slider from "./homeSections/Slider";
import { PopularMovieContext } from "../context/PopularMovie";

export default function Accueil() {
  const [PopularMoviesData] = useContext(PopularMovieContext);
  const sliderData = PopularMoviesData.results;

  const loader = () => {
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
  };

  const showHomePage = () => {
    if (PopularMoviesData.length === 0) {
      loader();
    } else {
      return (
        <>
          <Slider data={sliderData}/>
          <Populaire></Populaire>
        </>
      );
    }
  };
  return <>{showHomePage()}</>;
}
