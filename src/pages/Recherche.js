import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PopularMovie from "../components/PopularMovies";
import Theme from "../theme";

const { light } = Theme;

const H1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: ${light};
  margin: 160px 10px 30px;
`;

export default function Recherche({ infoToSearch }) {
  const [page, setPage] = useState(1);
  const [dataTable, setTableMovie] = useState([]);
  const [moviesData, setMoviesData] = useState([]);

  let url = `https://api.themoviedb.org/3/search/multi?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=${page}&include_adult=false&query=${infoToSearch}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((dataSet) => {
        setTableMovie(dataSet);
        populateMovieInfo(dataSet);
      });
  }, [url]);

  const populateMovieInfo = (dataSet) => {
    if (dataSet) {
      if (dataSet.total_pages > 0) {
        setMoviesData(
          dataSet.results.filter((data) => data.media_type === "movie")
        );
      }
    }
  };

  const showMovies = () => {
    if (moviesData.length > 0) {
      return <PopularMovie title="les films" data={moviesData}></PopularMovie>;
    }
  };

  const showInformation = () => {
    if (dataTable) {
      if (dataTable.total_pages < 1) {
        return <H1>Aucune information relative à {infoToSearch}</H1>;
      } else {
        return (
          <>
            <H1>
              Voici l'information ou les informations relative à {infoToSearch}
            </H1>
            {showMovies()}
          </>
        );
      }
    } else {
      <H1>Aucune information relative à {infoToSearch}</H1>;
    }
  };

  return <> {showInformation()}</>;
}
