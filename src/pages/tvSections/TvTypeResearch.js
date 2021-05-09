import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PopularSerie from "../../components/PopularSeries";
import Theme from "../../theme";

const { light } = Theme;

const NotFoundInformation = styled.h1`
  margin-top: 200px;
  margin-bottom: 50px;
  font-size: 2rem;
  color: ${light};
`;
const MainContainer = styled.div`
  margin-top: 200px;
`;

export default function TvTypeResearch({ genreId }) {
  const [seriesData, setSerieData] = useState([]);

  let url = `https://api.themoviedb.org/3/tv/popular?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;

  useEffect(() => {
    fetch(url)
      .then((responses) => responses.json())
      .then((dataSet) => {
        setSerieData(
          dataSet.results.filter((data) => data.genre_ids.includes(genreId))
        );
      });
  }, [url, genreId]);

  const showData = () => {
    if (seriesData.length > 0) {
      return (
        <MainContainer>
          <PopularSerie data={seriesData}></PopularSerie>
        </MainContainer>
      );
    } else {
      return (
        <NotFoundInformation>
          Pas des séries de cette catégorie
        </NotFoundInformation>
      );
    }
  };

  return <>{showData()}</>;
}
