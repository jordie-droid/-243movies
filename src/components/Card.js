import React from "react";
import PlugLove from "../images/vignettes/78d62a98-830e-4c39-a853-d2993e562ee8.jpg";
import styled from "styled-components";
import Theme from "../theme";

export default function Card() {
  const { light, dark } = Theme;
  const CardContainer = styled.div`
    position: relative;
  `;

  const Image = styled.img`
    width: 200px;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
  `;
  const FilmTitle = styled.h2`
    font-size: 1.7rem;
    margin: 10px 0;
    color: ${light};
  `;

  const DescriptionTitle = styled.strong`
    font-size: 1rem;
    margin: 0 0 10px;
    color: ${light};
  `;
  const Overview = styled.div`
    position: absolute;
    width: 100%;
    height: 73%;
    background-color: ${dark};
    color: ${light};
    opacity: 0.7;
    top: 0;
    transition: 0.3s;
    visibility: hidden;
    cursor: pointer;
  `;

  return (
    <CardContainer className="card">
      <Image src={PlugLove}></Image>
      <FilmTitle>Plug Love</FilmTitle>
      <DescriptionTitle>(Year) duration</DescriptionTitle> <br />
      <DescriptionTitle>Categories</DescriptionTitle>
      <Overview>JE SUIS</Overview>
    </CardContainer>
  );
}
