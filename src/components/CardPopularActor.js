import React from "react";
import styled from "styled-components";
import Theme from "../theme";

const { light, dark } = Theme;
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
const ActorName = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  color: ${light};
`;

export default function Card({ data }) {
  let urlImage = `https://image.tmdb.org/t/p/w1280`;
  return (
    <CardContainer className="card">
      <Image src={`${urlImage}${data.profile_path}`}></Image>
      <ActorName>{data.name}</ActorName>
    </CardContainer>
  );
}
