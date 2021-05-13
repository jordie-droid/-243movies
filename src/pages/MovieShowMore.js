import React from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";

const MainContainer = styled.div`
  margin: 100px 20px 295px;
`;

export default function MovieShowMore() {
  const { id } = useParams();
  const history = useHistory();

  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/460465?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;

  async function fetchAboutMovie() {}

  return (
    <MainContainer>
      <p>welcome to show more about movie</p>
    </MainContainer>
  );
}
