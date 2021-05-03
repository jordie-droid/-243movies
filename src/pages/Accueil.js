import React from "react";
import Populaire from "./homeSections/Populaire";
import Slider from "./homeSections/Slider";

export default function Accueil() {
  return (
    <>
      <Slider />
      <Populaire></Populaire>
    </>
  );
}
