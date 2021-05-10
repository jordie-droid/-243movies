import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PopularMovie from "../../components/PopularMovies";
import Theme from "../../theme";

const { light } = Theme;

const NotFoundInformation = styled.h1`
  margin-top: 83px;
  margin-bottom: 50px;
  font-size: 2rem;
  color: ${light};
`;
const MainContainer = styled.div`
  margin-top: 83px;
`;

export default function TvTypeResearch({ genreMovieId }) {
  const [movieData, setSerieData] = useState([]);

  let url = `https://api.themoviedb.org/3/movie/popular?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;

  useEffect(() => {
    fetch(url)
      .then((responses) => responses.json())
      .then((dataSet) => {
        setSerieData(
          dataSet.results.filter((data) => data.genre_ids.includes(genreMovieId))
        );
      });
  }, [url, genreMovieId]);

  const showData = () => {
    if (movieData.length > 0) {
      return (
        <MainContainer>
          <PopularMovie data={movieData}></PopularMovie>
        </MainContainer>
      );
    } else {
      return (
        <NotFoundInformation>
          Pas des films de cette catégorie
        </NotFoundInformation>
      );
    }
  };

  return <>{showData()}</>;
}
