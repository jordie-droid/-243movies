import React from "react";
import PlugLove from "../images/vignettes/78d62a98-830e-4c39-a853-d2993e562ee8.jpg";
import styled from "styled-components";
import Theme from "../theme";

export default function Card1() {
  const { light } = Theme;

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

  const YearDuration = styled.strong`
    font-size: 1.7rem;
    margin: 0 0 10px;
    color: ${light};
  `;
  return (
    <div>
      <Image src={PlugLove}></Image>
      <FilmTitle>Plug Love</FilmTitle>
      <YearDuration>Year</YearDuration>
    </div>
  );
}
