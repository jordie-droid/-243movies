import React from "react";
import styled from "styled-components";
import Card from "./CardPopularActor";
import Theme from "../theme";

const { dark, orange } = Theme;

/************* STYLES ****************/
const PopularMainContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${dark};
  margin-top: 50px;
  overflow: hidden;
`;
const Title = styled.h2`
  font-size: 1.9rem;
  color: ${orange};
  margin-left: 155px;
`;
const PopularContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 73%;
  height: 100%;
  left: 50%;
  padding: 10px 0;
  transform: translateX(-50%);
  background-color: ${dark};
  cursor: pointer;
`;

export default function PopularActors({ title, data }) {
  return (
    <PopularMainContainer>
      <Title>{title}</Title>
      <PopularContainer>
        {data.map((data) => {
          return <Card key={data.id} data={data}></Card>;
        })}
      </PopularContainer>
    </PopularMainContainer>
  );
}
