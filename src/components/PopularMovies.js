import React, { useState } from "react";
import styled from "styled-components";
import Card from "./CardPoularMovies";
import Theme from "../theme";
import { Modal } from "react-bootstrap";
import Iframe from "./TrailerMovie";

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
`;

export default function PopularMovie({ title, data }) {
  const [show, setShow] = useState(false);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieID, setMovieID] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = ({ title, id }) => {
    setShow(true);
    setMovieTitle(title);
    setMovieID(id);
  };

  return (
    <>
      <PopularMainContainer>
        <Title>{title}</Title>
        <PopularContainer>
          {data.map((data) => {
            return (
              <Card
                key={data.id}
                data={data}
                handleShow={() => handleShow(data)}
              ></Card>
            );
          })}
        </PopularContainer>
      </PopularMainContainer>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{movieTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Iframe movieID={movieID}></Iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}
