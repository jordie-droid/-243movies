import React from "react";
import styled from "styled-components";
import Theme from "../theme";

const { orange, dark, light } = Theme;

const InputText = styled.input`
  background-color: ${dark};
  border: solid 1px ${orange};
  height: 40px;
  color: ${light};
  padding: 0 10px;
  border-radius: 30px;
  &:focus {
    outline: none;
  }
`;

export default function Input(props) {
  return <InputText />;
}
