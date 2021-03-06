import React from "react";
import styled from "styled-components";
import Theme from "../theme";
import DefaultCardImage from "../images/defaultImage.png";
import { useHistory } from "react-router";

const { light, dark, orange } = Theme;
const CardContainer = styled.div`
  width: 300px;
  margin: 20px 0px;
  position: relative;
  background-color: ${dark};
  strong {
    color: ${orange};
  }
  p {
    color: ${light};
    font-size: 1.5;
    font-weight: 700;
    margin-bottom: 0px;
  }
  &:hover {
    transform: scale(1.03);
  }
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
  let urlImage = `https://image.tmdb.org/t/p/w500`;
  let history = useHistory();

  const goToShowMoreCelebrity = (id) => {
    history.push(`showMoreCelebrity/${id}`);
  };

  return (
    <CardContainer
      className="card"
      onClick={() => goToShowMoreCelebrity(data.id)}
    >
      <Image
        src={
          data.profile_path
            ? `${urlImage}${data.profile_path}`
            : DefaultCardImage
        }
      ></Image>
      <ActorName>{data.name}</ActorName>
      <p>{data.gender === 1 ? "Connue pour" : "Connu pour"}</p>
      {data.known_for.map((filmOrTv) => {
        return <strong key={filmOrTv.id}>{filmOrTv.title}</strong>;
      })}
    </CardContainer>
  );
}
