import React from "react";
import styled from "styled-components";
import Theme from "../theme";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import DefaultCardImage from "../images/defaultImage.png";
import { useHistory } from "react-router";

const { light, dark, orange, transparentDark, transparentOrange } = Theme;
const CardContainer = styled.div`
  width: 300px;
  margin: 20px 0px;
  position: relative;
  background-color: ${dark};
  &:hover {
    transform: scale(1.03);
  }
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
  const urlImage = `https://image.tmdb.org/t/p/w500`;

  const history = useHistory();

  const goBack = (id) => {
    history.push(`/serieShowMore/${id}`);
  };

  return (
    <OverlayTrigger
      overlay={
        <Tooltip id="tooltip">
          Clique sur l'image pour la vid??o d'annonce
        </Tooltip>
      }
    >
      <span className="d-inline-block">
        <CardContainer className="card">
          <Image
            src={
              data.poster_path
                ? `${urlImage}${data.poster_path}`
                : DefaultCardImage
            }
          ></Image>
          <FilmTitle>{data.name}</FilmTitle>
          <DescriptionTitle>
            {data.first_air_date
              ? `Apparu le : ${data.first_air_date}`
              : "Pas de date d'apparution"}
          </DescriptionTitle>
          <br />
          <DescriptionTitle>Note : {data.vote_average}</DescriptionTitle>
          <Overview onClick={handleShow}>
            {data.overview ? data.overview : "Pas de r??sum?? pour cette s??rie"}
          </Overview>
          <VoirPlus onClick={() => goBack(data.id)}>Voir plus</VoirPlus>
        </CardContainer>
      </span>
    </OverlayTrigger>
  );
}
