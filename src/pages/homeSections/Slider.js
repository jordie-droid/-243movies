import React from "react";
import styled from "styled-components";
import "../../css/style.css";
import Theme from "../../theme";
import Input from "../../components/Input";
import PlugLove from "../../images/vignettes/78d62a98-830e-4c39-a853-d2993e562ee8.jpg";
import Murder from "../../images/vignettes/bJs8Y6T88NcgksxA8UaVl4YX8p8.jpg";
import Button from "../../components/Button";
import Title1 from "../../components/Title1";

export default function Slider() {
  const { transparentLight, dark, light, orange } = Theme;

  /************** STYLES **************/
  const SliderMainContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 160px;
    height: 70vh;
    position: relative;
    background-color: ${dark};
  `;

  const SliderContainer = styled.div`
    width: 94%;
    height: 100%;
    border-radius: 10px;
    transition: 2s;
    background-color: ${transparentLight};
  `;

  const BigFiche = styled.img`
    width: 300px;
    height: 470px;
    position: absolute;
    top: -15px;
    left: 20px;
    border-radius: 8px;
  `;

  const SmallFiche = styled.img`
    width: 100px;
    height: 130px;
    position: absolute;
    bottom: -45px;
    right: 20px;
    border-radius: 8px;
  `;

  const SlideAutoNavigation = styled.div``;
  const SlideManuelNavigation = styled.div`
    position: absolute;
    width: 93%;
    display: flex;
    justify-content: center;
    top: 85%;
  `;

  const SelectButtonOne = styled.div``;
  const SelectButtonTwo = styled.div``;
  const SelectButtonThree = styled.div``;
  const SelectButtonFour = styled.div``;

  const Label = styled.label`
    margin: 15px;
    border: solid 1px ${light};
    border-radius: 100%;
    transition: 1s;
    cursor: pointer;
    padding: 15px 15px;
    &:hover {
      background-color: ${orange};
    }
  `;

  const InformationContainer = styled.div`
    position: absolute;
    width: 70%;
    left: 320px;
    padding: 10px 15px;
  `;

  const BrefDescription = styled.p`
    font-size: 1rem;
    color: ${light};
    margin-bottom: 10px;
    line-height: 20px;
  `;
  const Popularty = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    font-size: 1.7rem;
    color: ${light};
    margin-bottom: 10px;
  `;
  const With = styled.strong`
    display: inline-block;
    font-size: 1.7rem;
    color: ${light};
    margin-bottom: 10px;
  `;
  const Actors = styled.div`
    width: 100%;
    display: flex;
  `;
  const ActorsImage = styled.img`
    width: 100px;
    height: 150px;
    margin-right: 20px;
    border-radius: 8px;
  `;
  /**************** SCRIPTS ***************/

  return (
    <SliderMainContainer>
      <Input className="radio-button" id="radio1" type="radio"></Input>
      <Input className="radio-button" id="radio2" type="radio"></Input>
      <Input className="radio-button" id="radio3" type="radio"></Input>
      <Input className="radio-button" id="radio4" type="radio"></Input>
      <SliderContainer>
        <BigFiche src={PlugLove}></BigFiche>
        <SlideAutoNavigation>
          <SelectButtonOne></SelectButtonOne>
          <SelectButtonTwo></SelectButtonTwo>
          <SelectButtonThree></SelectButtonThree>
          <SelectButtonFour></SelectButtonFour>
        </SlideAutoNavigation>
        <SlideManuelNavigation>
          <Label htmlFor="radio1"></Label>
          <Label htmlFor="radio2"></Label>
          <Label htmlFor="radio3"></Label>
          <Label htmlFor="radio4"></Label>
        </SlideManuelNavigation>
        <InformationContainer>
          <Title1>Plug Love</Title1>
          <BrefDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus dolores reprehenderit repudiandae nam facilis illum
            excepturi nihil amet culpa a. Incidunt earum distinctio doloribus
            perspiciatis nostrum fugiat! Quae, eligendi odio? Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Necessitatibus dolores
            reprehenderit repudiandae nam facilis illum excepturi nihil amet
            culpa a. Incidunt earum distinctio doloribus perspiciatis nostrum
            fugiat! Quae, eligendi odio?
          </BrefDescription>
          <Popularty>
            <strong>19K</strong>
          </Popularty>
          <With>Avec</With>
          <Actors>
            <ActorsImage src={Murder}></ActorsImage>
            <ActorsImage src={Murder}></ActorsImage>
            <ActorsImage src={Murder}></ActorsImage>
            <ActorsImage src={Murder}></ActorsImage>
            <ActorsImage src={Murder}></ActorsImage>
            <ActorsImage src={Murder}></ActorsImage>
            <ActorsImage src={Murder}></ActorsImage>
            <ActorsImage src={Murder}></ActorsImage>
          </Actors>
        </InformationContainer>
        <Button width="150px" className="slide__button-show-more">
          Voir plus
        </Button>
        <SmallFiche src={Murder}></SmallFiche>
      </SliderContainer>
    </SliderMainContainer>
  );
}
