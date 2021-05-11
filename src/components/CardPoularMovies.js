import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styled from "styled-components";
import Theme from "../theme";
import DefaultCardImage from "../images/defaultImage.png";

const { light, dark, orange, transparentDark, transparentOrange } = Theme;
const CardContainer = styled.div`
  width: 300px;
  margin: 20px 0px;
  position: relative;
  background-color: ${dark};
  &:hover div {
    width: 100%;
    visibility: visible;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
`;
const FilmTitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  color: ${light};
`;

const DescriptionTitle = styled.strong`
  font-size: 0.8rem;
  margin: -5px 0 -15px;
  color: ${light};
`;
const Overview = styled.div`
  position: absolute;
  font-size: 0.8rem;
  width: 100%;
  height: 250px;
  max-height: 250px;
  background-color: ${transparentDark};
  color: ${light};
  top: 0;
  transition: 0.3s;
  visibility: hidden;
  cursor: pointer;
  padding: 10px;
  overflow-x: auto;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #f5f3f34d;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${orange};
    border-radius: 20px;
  }
`;

const VoirPlus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${dark};
  width: 110px;
  max-width: 110px;
  height: 40px;
  color: ${light};
  border: solid 2px ${transparentOrange};
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  top: -25px;
  left: 170px;
  &:hover {
    border: solid 2px ${orange};
    color: ${orange};
    transition: 1s;
  }
`;

export default function Card({ data, handleShow }) {
  let urlImage = `https://image.tmdb.org/t/p/w500`;

  return (
    <OverlayTrigger
      overlay={
        <Tooltip id="tooltip">
          Clique sur l'image pour la vidéo d'annonce
        </Tooltip>
      }
    >
      <span className="d-inline-block">
        <CardContainer className="card">
          <Image
            src={
              data.poster_path
                ? `${urlImage}${data.poster_path}`
                : `${DefaultCardImage}`
            }
          ></Image>
          <FilmTitle>{data.title}</FilmTitle>
          <DescriptionTitle>
            {data.release_date
              ? `Apparu le : ${data.release_date}`
              : "Pas de date d'apparution pour film"}
          </DescriptionTitle>
          <br />
          <DescriptionTitle>Note : {data.vote_average}</DescriptionTitle>
          <Overview onClick={handleShow}>
            {data.overview ? `${data.overview}` : `Pas de résumé pour ce film`}
          </Overview>
          <VoirPlus>Voir plus</VoirPlus>
        </CardContainer>
      </span>
    </OverlayTrigger>
  );
}
