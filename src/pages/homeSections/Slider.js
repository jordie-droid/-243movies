import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../../css/style.css";
import Theme from "../../theme";
import Button from "../../components/Button";
import Title1 from "../../components/Title1";
import star from "../../images/icons/star.svg";

const { transparentLight, dark, light, orange } = Theme;

const SliderMainContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  margin-top: 160px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${transparentLight};
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 95%;
  background-color: ${dark};
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
`;

const DescriptionContainer = styled.div`
  padding: 20px;
  width: 100%;
  height: 60%;
  border: solid 1px #fff;
`;

const MovieTitle = styled.h1`
  font-size: 1.9rem;
  color: ${light};
  margin-bottom: 10px;
`;

const Overwiew = styled.p`
  font-size: 1rem;
  color: ${light};
`;

const Note = styled.strong`
  position: relative;
  display: inline-block;
  margin-top: 20px;
  font-size: 1.4rem;
  color: ${light};
`;

export default function Slider(props) {
  let urlImage = "";
  const sliderData = props.data;
  console.log(sliderData);
  return (
    <SliderMainContainer>
      {sliderData.map(({ id, backdrop_path, original_title }) => {
        urlImage = "https://image.tmdb.org/t/p/w185" + backdrop_path;
        return (
          <SlideContainer key={id}>
            <SlideImage src={urlImage}></SlideImage>;
            <DescriptionContainer>
              <MovieTitle>{original_title}</MovieTitle>
              <Overwiew>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                dignissimos in minus explicabo blanditiis, vel maxime tempora
                labore! Ut reiciendis quisquam incidunt quidem placeat enim
                porro necessitatibus dolorum, delectus sapiente!
              </Overwiew>
              <Note>Note : 9.4</Note>
            </DescriptionContainer>
            ;
          </SlideContainer>
        );
      })}
    </SliderMainContainer>
  );
}
