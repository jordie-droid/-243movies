import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Theme from "../theme";

const { orange } = Theme;

const H1 = styled.h1`
  color: ${orange};
  margin: 160px 10px 30px;
`;

export default function Recherche({ infoToSearch }) {
  let url = `https://api.themoviedb.org/3/search/multi?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=1&include_adult=false&query=${infoToSearch}`;

  const [tableMovie, setTableMovie] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((dataSet) => setTableMovie(dataSet));
  });

  const showMovieInformation = () => {};

  return <H1>Résultat relative à {infoToSearch}</H1>;
}
