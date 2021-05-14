import React from "react";
import styled from "styled-components";
import Theme from "../theme";

const { dark, light, transparentOrange, orange } = Theme;

const CustomButton = styled.div`
  background-color: ${dark};
  width: 185px;
  height: 40px;
  color: ${light};
  border: solid 2px ${transparentOrange};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  font-size: 1rem;
  &:hover {
    border: solid 2px ${orange};
    color: ${orange};
    transition: 1s;
  }
`;

export default function TvGenre({ text }) {

  return <CustomButton >{text}</CustomButton>;
}
