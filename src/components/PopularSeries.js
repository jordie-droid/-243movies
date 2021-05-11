import React, { useState } from "react";
import styled from "styled-components";
import Card from "./CardPopularSeries";
import Theme from "../theme";
import { Modal } from "react-bootstrap";
import Iframe from "./TrailerSerie";

const { dark, orange } = Theme;

/************* STYLES ****************/
const PopularMainContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${dark};
  margin-top: 20px;
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

const Dialog = styled.div``;

export default function PopularSerie({ title, name, data }) {
  const [show, setShow] = useState(false);
  const [serieTitle, setSerieTitle] = useState("");
  const [serieID, setSerieID] = useState(0);

  const handleClose = () => setShow(false);

  const handleShow = (name, idmovie) => {
    setShow(true);
    setSerieTitle(name);
    setSerieID(idmovie);
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
                handleShow={() => handleShow(data.name, data.id)}
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
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        className="pt-200"
      >
        <Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{serieTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark">
            <Iframe serieID={serieID}></Iframe>
          </Modal.Body>
        </Dialog>
      </Modal>
    </>
  );
}
