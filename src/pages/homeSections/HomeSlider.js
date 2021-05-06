import React from "react";
import { Carousel } from "react-bootstrap";

export default function HomeSlider(props) {
  let urlImage = "https://image.tmdb.org/t/p/w1280";
  const sliderData = props.data;
  const sliderFoorData = [];
  for (let i = 0; i < 4; i++) {
    sliderFoorData.push(sliderData[i]);
  }

  return (
    <Carousel className="carousel-component">
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={`${urlImage}${sliderFoorData[0].backdrop_path}`}
          alt="First slide"
        />
        <Carousel.Caption className="bg-black-transparent">
          <h3>{sliderFoorData[0].title}</h3>
          <p>{sliderFoorData[0].overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={`${urlImage}${sliderFoorData[1].backdrop_path}`}
          alt="Second slide"
        />
        <Carousel.Caption className="bg-black-transparent">
          <h3>{sliderFoorData[1].title}</h3>
          <p>{sliderFoorData[1].overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={`${urlImage}${sliderFoorData[2].backdrop_path}`}
          alt="Third slide"
        />
        <Carousel.Caption className="bg-black-transparent">
          <h3>{sliderFoorData[2].title}</h3>
          <p>{sliderFoorData[2].overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={`${urlImage}${sliderFoorData[3].backdrop_path}`}
          alt="Third slide"
        />
        <Carousel.Caption className="bg-black-transparent">
          <h3>{sliderFoorData[3].title}</h3>
          <p>{sliderFoorData[3].overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
