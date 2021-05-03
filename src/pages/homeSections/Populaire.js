import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import HorizontalSeparator from "../../components/HorizontalSeparator";
import Theme from "../../theme";

export default function Populaire() {
  const { dark, orange, light } = Theme;

  /************* STYLES ****************/
  const PopularMainContainer = styled.section`
    position: relative;
    height: 60vh;
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
    width: 73%;
    height: 100%;
    left: 50%;
    padding: 10px 0;
    transform: translateX(-50%);
    background-color: ${dark};
  `;
  const ButtonGoToPrev = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: -20%;
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
    right: -20%;
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
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </PopularContainer>
      <HorizontalSeparator></HorizontalSeparator>
    </PopularMainContainer>
  );
}
