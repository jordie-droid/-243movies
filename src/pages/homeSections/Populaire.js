import React from "react";
import styled from "styled-components";
import Card1 from "../../components/Card1";
import Theme from "../../theme";

export default function Populaire() {
  const { dark, transparentLight, orange, light } = Theme;

  /************* STYLES ****************/
  const PopularMainContainer = styled.section`
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${transparentLight};
    margin-top: 50px;
  `;
  const Title = styled.h2`
    font-size: 1.9rem;
    color: ${orange};
    margin-left: 155px;
  `;
  const PopularContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${dark};
  `;
  const ButtonGoToPrev = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    margin-left: 65px;
    border: solid 1px ${light};
    border-radius: 50%;
    color: ${light};
    background-color: ${dark};
    cursor: pointer;
  `;
  const ButtonGoToNext = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    margin-right: 65px;
    border: solid 1px ${light};
    border-radius: 50%;
    color: ${light};
    background-color: ${dark};
    cursor: pointer;
  `;

  return (
    <PopularMainContainer>
      <Title>Les plus populaires</Title>
      <PopularContainer>
        <ButtonGoToPrev>Prev</ButtonGoToPrev>
        <ButtonGoToNext>Next</ButtonGoToNext>
        <Card1></Card1>
      </PopularContainer>
    </PopularMainContainer>
  );
}
