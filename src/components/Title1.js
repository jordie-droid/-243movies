import React from "react";
import styled from "styled-components";
import Theme from "../theme";

export default function Title1({children}) {
  const { light } = Theme;
  const Title1 = styled.h1`
    color: ${light};
    font-size: 2.3rem;
    margin-bottom : 10px;
  `;
  return <Title1>{children}</Title1>;
}
