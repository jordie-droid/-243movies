import React, { useContext } from "react";
import styled from "styled-components";
import ButtonLink from "../components/ButtonLink";
import { GenreSerieContext } from "../context/GenreSerie";
import Theme from "../theme";

const { transparentLight } = Theme;

const GenreContainer = styled.div`
  background-color: ${transparentLight};
  margin-top: 180px;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Series() {
  const [GenreSerie] = useContext(GenreSerieContext);
  const nameGenre = GenreSerie.genres;

  const showGenres = () => {
    if (GenreSerie.length === 0) {
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
        <GenreContainer>
          {nameGenre.map(({ id, name }) => (
            <ButtonLink key={id} text={name}></ButtonLink>
          ))}
        </GenreContainer>
      );
    }
  };

  return <>{showGenres()}</>;
}
