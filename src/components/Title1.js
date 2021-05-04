import React from "react";
import styled from "styled-components";
import Theme from "../theme";

const { light } = Theme;
const Title = styled.h1`
  color: ${light};
  font-size: 2.3rem;
  margin-bottom: 10px;
`;

export default function Title1({ children }) {
  return <Title>{children}</Title>;
}
