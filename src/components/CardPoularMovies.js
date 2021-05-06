import React from "react";
import styled from "styled-components";
import Theme from "../theme";

const { light, dark, orange, transparentDark } = Theme;
const CardContainer = styled.div`
  width: 300px;
  margin: 20px 0px;
  position: relative;
  background-color: ${dark};
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
    width: 1em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${orange};
    border-radius: 20px;
  }
`;

export default function Card({ data,handleShow }) {
  let urlImage = `https://image.tmdb.org/t/p/w1280`;

  return (
    <CardContainer className="card" onClick={handleShow}>
      <Image src={`${urlImage}${data.backdrop_path}`}></Image>
      <FilmTitle>{data.title}</FilmTitle>
      <DescriptionTitle>Apparu le : {data.release_date}</DescriptionTitle>
      <br />
      <DescriptionTitle>Note : {data.vote_average}</DescriptionTitle>
      <Overview>{data.overview}</Overview>
    </CardContainer>
  );
}
